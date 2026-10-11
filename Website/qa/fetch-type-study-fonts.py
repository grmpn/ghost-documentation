"""Fetch the four review fonts and their licenses from official Google sources."""
import json
import re
import sys
from pathlib import Path
from urllib.request import Request, urlopen

assets = Path(__file__).resolve().parents[1] / 'iterations/03-bold-type/assets'
css_url = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Sora:wght@800&family=Space+Grotesk:wght@700&family=Ubuntu+Sans:wght@800&display=swap'
titles_only = '--titles-only' in sys.argv
if titles_only:
    css_url += '&text=GHOST'
agent = {'User-Agent': 'Mozilla/5.0 Chrome/130.0.0.0 Safari/537.36'}
css = urlopen(Request(css_url, headers=agent), timeout=30).read().decode()
fonts = {}
for block in re.findall(r'@font-face\s*\{([^}]+)\}', css):
    # The final Latin block is enough for the current English case study.
    if 'unicode-range' in block and 'U+0000-00FF' not in block:
        continue
    family = re.search(r"font-family:\s*'([^']+)'", block).group(1)
    weight = re.search(r'font-weight:\s*(\d+)', block).group(1)
    source = re.search(r'src:\s*url\(([^)]+)\)', block).group(1)
    if not source.startswith('https://fonts.gstatic.com/'):
        raise ValueError('Unexpected font source')
    extension = '.woff2' if '.woff2' in source else '.ttf'
    filename = family.lower().replace(' ', '-') + '-' + weight + ('-title' if titles_only else '') + extension
    data = urlopen(source, timeout=30).read()
    (assets / filename).write_bytes(data)
    fonts[family] = {'file': filename, 'weight': int(weight), 'source': source, 'bytes': len(data)}
if len(fonts) != 4:
    raise ValueError(f'Expected four fonts, got {list(fonts)}')
for name in ([] if titles_only else ['sora', 'spacegrotesk', 'rajdhani']):
    source = f'https://raw.githubusercontent.com/google/fonts/main/ofl/{name}/OFL.txt'
    (assets / f'{name}-OFL.txt').write_bytes(urlopen(source, timeout=30).read())
(assets / ('type-study-title-sources.json' if titles_only else 'type-study-sources.json')).write_text(json.dumps(fonts, indent=2) + '\n', encoding='utf-8')
print(json.dumps(fonts, indent=2))
