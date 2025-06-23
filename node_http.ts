import http from 'http';

const host = 'localhost';
const port = 3000;

const MAX_BODY_SIZE = 100 * 1024 * 1024; // 100 MB

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/example') {
        let body = '';
        let bodySize = 0;

        req.on('data', chunk => {
            bodySize += chunk.length;
            if (bodySize > MAX_BODY_SIZE) {
                res.writeHead(413, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Payload too large' }));
                req.destroy(); // stop receiving more data
                return;
            }
            body += chunk;
        });

        req.on('end', () => {
            try {
                const data = body;
                console.log(data);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (err) {
                console.error('Error parsing JSON:', err);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(
            JSON.stringify({
                error: 'Not Found',
                message: `Route ${req.method} ${req.url} not found`,
            })
        );
    }
});

console.log(`Starting Web Server on ${host}:${port}...`);
server.listen(port, host);
