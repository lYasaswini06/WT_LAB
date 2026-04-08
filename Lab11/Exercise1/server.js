const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Powered-By', 'Node.js');

    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200);
        res.write('<h1>Welcome to Node.js HTTP Server!</h1>');
        res.write('<p>This server is built using only the built-in http module.</p>');
        res.end();
    } 
    else if (req.url === '/about') {
        res.writeHead(200);
        res.write('<h1>About This Server</h1>');
        res.end();
    } 
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const data = {
            message: 'Hello from Node.js API!',
            timestamp: new Date().toISOString()
        };
        res.end(JSON.stringify(data, null, 2));
    } 
    else {
        res.writeHead(404);
        res.write('<h1>404 - Page Not Found</h1>');
        res.end();
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});