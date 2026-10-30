"""Validate and stage the current website for GitHub Pages. No dependencies."""

from html.parser import HTMLParser
from pathlib import Path
import re
import shutil
from urllib.parse import unquote, urlsplit


WEBSITE = Path(__file__).resolve().parent
PROJECT = WEBSITE.parent
CURRENT_ITERATION = '12-version-1.0'
SOURCE = WEBSITE / 'iterations' / CURRENT_ITERATION
OUTPUT = PROJECT / '.codex-build' / 'github-pages'


def require(condition, message):
    if not condition:
        raise ValueError(message)


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.refs = []
        self.h1_count = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        self.h1_count += tag == 'h1'
        for key in ('href', 'src', 'poster'):
            if attrs.get(key):
                self.refs.append(attrs[key])
        if tag == 'img':
            require('alt' in attrs, 'Image is missing alternative text')
        if tag == 'meta' and attrs.get('name', '').lower() == 'robots':
            require('noindex' not in attrs.get('content', '').lower(),
                    'Remove prototype noindex metadata before publishing')


def validate(root):
    page = Page()
    page.feed((root / 'index.html').read_text(encoding='utf-8'))
    require(page.h1_count == 1, 'Expected one H1')
    require(len(page.ids) == len(set(page.ids)), 'Duplicate HTML IDs')
    refs = [(root / 'index.html', ref) for ref in page.refs]
    for css in root.glob('*.css'):
        refs.extend((css, ref) for ref in re.findall(
            r'url\(\s*[\'\"]?([^\s)\'\"]+)', css.read_text(encoding='utf-8')))
    for js in root.glob('*.js'):
        refs.extend((js, ref) for ref in re.findall(
            r'[\'\"](assets/[^\'\"]+)[\'\"]', js.read_text(encoding='utf-8')))

    for owner, ref in refs:
        url = urlsplit(ref)
        if url.scheme or url.netloc:
            continue
        if not url.path:
            if url.fragment:
                require(unquote(url.fragment) in page.ids, f'Broken anchor: {ref}')
            continue
        require(not url.path.startswith('/'), f'Use a relative URL for project Pages: {ref}')
        target = owner.parent / unquote(url.path)
        require(target.resolve().is_relative_to(root.resolve()), f'Resource leaves website: {ref}')
        require(target.is_file(), f'Missing resource in {owner.name}: {ref}')
        # GitHub serves case-sensitive paths, even when this check runs on Windows.
        current = root
        for part in target.relative_to(root).parts:
            require(part in {child.name for child in current.iterdir()},
                    f'Resource filename case does not match: {ref}')
            current = current / part
    files = [path for path in root.rglob('*') if path.is_file()]
    size = sum(path.stat().st_size for path in files)
    require(size < 1_000_000_000, 'Published website exceeds the 1 GB Pages limit')
    require(all(path.stat().st_size < 100_000_000 for path in files),
            'A website file is too large for a normal GitHub push')
    return len(refs), len(files), size


def main():
    require(not any(path.is_symlink() for path in SOURCE.rglob('*')),
            'Website source must not contain symbolic links')
    validate(SOURCE)
    # Clean only this fixed, project-local generated directory.
    require(OUTPUT.resolve() == PROJECT / '.codex-build' / 'github-pages',
            'Build output must stay in the project .codex-build directory')
    OUTPUT.parent.mkdir(exist_ok=True)
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    OUTPUT.mkdir()
    for path in SOURCE.iterdir():
        if path.is_file() and path.suffix in ('.html', '.css', '.js'):
            shutil.copy2(path, OUTPUT / path.name)
    shutil.copytree(SOURCE / 'assets', OUTPUT / 'assets')
    (OUTPUT / '.nojekyll').touch()
    refs, files, size = validate(OUTPUT)
    print(f'Ready: {CURRENT_ITERATION} -> {OUTPUT}')
    print(f'Validated {refs} references; {files} files; {size / 1_000_000:.2f} MB')


if __name__ == '__main__':
    main()
