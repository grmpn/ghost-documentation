"""Check local prototype resources, anchors, structure, and serving. No dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import urlopen
import json
import re
import sys

website = Path(__file__).resolve().parents[1]
iteration = sys.argv[1] if len(sys.argv) > 1 else '08-vector-reveal'
root = website / 'iterations' / iteration

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.refs, self.images, self.headings, self.sections = [], [], [], [], 0
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.append(a['id'])
        for attr in ('src', 'href'):
            if a.get(attr):
                self.refs.append(a[attr])
        if tag == 'img':
            self.images.append(a)
        if tag == 'h1':
            self.headings.append(tag)
        if tag == 'section':
            self.sections += 1

page = Page()
page.feed((root / 'index.html').read_text(encoding='utf-8'))
assert len(page.ids) == len(set(page.ids)), 'Duplicate IDs'
expected_sections = 9 if iteration in ('11-charcoal-grid', '12-version-1.0') else 10
assert page.sections == expected_sections, f'Expected {expected_sections} sections'
assert len(page.headings) == 1, 'Expected a single H1'
assert all(i.get('alt') or (i.get('aria-hidden') == 'true' and i.get('alt') == '') for i in page.images), 'Missing image alternative text'
for ref in page.refs:
    if ref.startswith('#'):
        assert ref[1:] in page.ids, f'Broken anchor: {ref}'
    elif not re.match(r'^[a-z]+:', ref):
        assert (root / ref).is_file(), f'Missing file: {ref}'

for css in root.glob('*.css'):
    for ref in re.findall(r"url\(['\"]?([^)'\"]+)", css.read_text()):
        if ref.startswith('#'):
            assert ref[1:] in page.ids, f'Missing inline SVG reference in {css.name}: {ref}'
        else:
            assert (root / ref).is_file(), f'Missing CSS resource in {css.name}: {ref}'

served = []
for path in root.rglob('*'):
    if path.is_file() and path.suffix != '.txt':
        url = 'http://127.0.0.1:4173/' + path.relative_to(website).as_posix()
        with urlopen(url) as response:
            assert response.status == 200, f'Cannot serve: {path}'
            assert len(response.read()) == path.stat().st_size, f'Incomplete response: {path}'
        served.append(path.relative_to(root).as_posix())

result = {'iteration': iteration, 'sections': page.sections, 'unique_ids': len(page.ids), 'html_images_with_alt': len(page.images), 'served_files': served, 'status': 'passed'}
(website / 'qa' / f'{iteration}-resource-check.json').write_text(json.dumps(result, indent=2) + '\n', encoding='utf-8')
print(json.dumps(result, indent=2))
