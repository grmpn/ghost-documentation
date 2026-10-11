"""Check local prototype resources, anchors, structure, and serving. No dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import urlopen
import json
import re

website = Path(__file__).resolve().parents[1]
root = website / 'iterations' / '01-foundation'

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
assert page.sections == 10, 'Expected all ten sections'
assert len(page.headings) == 1, 'Expected a single H1'
assert all(i.get('alt') for i in page.images), 'Missing image alternative text'
for ref in page.refs:
    if ref.startswith('#'):
        assert ref[1:] in page.ids, f'Broken anchor: {ref}'
    elif not re.match(r'^[a-z]+:', ref):
        assert (root / ref).is_file(), f'Missing file: {ref}'

for ref in re.findall(r"url\(['\"]?([^)'\"]+)", (root / 'styles.css').read_text()):
    assert (root / ref).is_file(), f'Missing CSS resource: {ref}'

served = []
for path in root.rglob('*'):
    if path.is_file() and path.suffix != '.txt':
        url = 'http://127.0.0.1:4173/' + path.relative_to(website).as_posix()
        with urlopen(url) as response:
            assert response.status == 200, f'Cannot serve: {path}'
            assert len(response.read()) == path.stat().st_size, f'Incomplete response: {path}'
        served.append(path.relative_to(root).as_posix())

result = {'sections': page.sections, 'unique_ids': len(page.ids), 'html_images_with_alt': len(page.images), 'served_files': served, 'status': 'passed'}
(website / 'qa' / 'resource-check.json').write_text(json.dumps(result, indent=2) + '\n', encoding='utf-8')
print(json.dumps(result, indent=2))
