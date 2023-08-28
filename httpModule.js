const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to the homepage');
    } else if (req.url === '/about') {
        res.end('here is the about page');
    } else {
        res.end(`Page not found`);
    }
});

server.listen(5000);