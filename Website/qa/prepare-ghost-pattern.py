"""Join the CAD export's existing segments into filled contours; never move geometry."""
from collections import Counter
from pathlib import Path
import re
import xml.etree.ElementTree as ET

project = Path(__file__).resolve().parents[2]
source = project / 'Assets/GhostPattern.svg'
target = project / 'Website/iterations/08-vector-reveal/assets/ghost-light-pattern.svg'
root = ET.parse(source).getroot()
segments = []
for path in root.findall('{http://www.w3.org/2000/svg}path'):
    d = path.attrib['d']
    command = re.search(r'[AL]', d).group()
    values = re.findall(r'-?\d+(?:\.\d+)?', d)
    start, end = tuple(values[:2]), tuple(values[-2:])
    segments.append((start, end, command, values[2:-2]))

degree = Counter(point for start, end, *_ in segments for point in (start, end))
assert all(count == 2 for count in degree.values()), 'Expected closed, non-branching contours'
remaining = set(range(len(segments)))
contours = []
used = []
while remaining:
    first = min(remaining)
    origin = current = segments[first][0]
    commands = ['M ' + ' '.join(origin)]
    while True:
        index = next(i for i in sorted(remaining) if current in segments[i][:2])
        start, end, kind, args = segments[index]
        args = args.copy()
        if current == end:
            start, end = end, start
            if kind == 'A':
                args[4] = str(1 - int(args[4]))  # Reverse traversal, same elliptical arc.
        commands.append(kind + ' ' + ' '.join(args + list(end)))
        remaining.remove(index)
        used.append(index)
        current = end
        if current == origin:
            commands.append('Z')
            break
    contours.append(' '.join(commands))
assert len(used) == len(segments) == len(set(used)) == 36
assert len(contours) == 2
paths = '\n'.join(f'  <path d="{d}"/>' for d in contours)
target.write_text('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="100 0 600 600" fill="#fff">
  <title>Ghost light pattern</title>
  <desc>Filled contours from Assets/GhostPattern.svg. All 36 original line and arc segments retained without moving points. Rotation is applied by the page.</desc>
''' + paths + '\n</svg>\n', encoding='utf-8')
print(f'Preserved {len(used)} segments in {len(contours)} closed white contours: {target}')
