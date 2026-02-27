const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ users: ['João', 'Maria'] }));
  } else if (req.url === '/users' && req.method === 'POST') {
    // Lógica de criação.
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});
server.listen(3000);
