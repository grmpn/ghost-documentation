import { createServer } from 'node:http';
import { readFile, stat, realpath } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = await realpath(dirname(fileURLToPath(import.meta.url)));
const port = Number(process.argv[2] || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ttf': 'font/ttf', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.vtt': 'text/vtt; charset=utf-8' };
const server = createServer(async (req, res) => {
  try {
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405).end(); return; }
    const requested = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname);
    if (requested.split('/').some(part => part.startsWith('.') || ['qa', 'node_modules'].includes(part))) { res.writeHead(404).end(); return; }
    let path = resolve(root, `.${requested}`);
    if (path !== root && !path.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
    path = await realpath(path);
    if (!path.startsWith(root + sep) || !types[extname(path)]) { res.writeHead(404).end(); return; }
    const content = await readFile(path);
    res.setHeader('Content-Type', types[extname(path)]);
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    const range = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
    if (range) {
      const start = Number(range[1]);
      const end = Math.min(range[2] ? Number(range[2]) : content.length - 1, content.length - 1);
      if (start > end || start >= content.length) { res.writeHead(416, { 'Content-Range': `bytes */${content.length}` }).end(); return; }
      res.writeHead(206, { 'Content-Range': `bytes ${start}-${end}/${content.length}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1 });
      res.end(req.method === 'HEAD' ? undefined : content.subarray(start, end + 1));
    } else {
      res.writeHead(200, { 'Content-Length': content.length, 'Accept-Ranges': 'bytes' });
      res.end(req.method === 'HEAD' ? undefined : content);
    }
  } catch { res.writeHead(404).end('Not found'); }
});
server.listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}/iterations/06-symbol-reveal/`));
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
