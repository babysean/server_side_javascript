const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
// 비동기적으로 서버 생성 실행
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});