const http = require('http');

const port = 4080;
const host = '127.0.0.1';  // you can write your own ip to connect other device with this app on local network.

const server = http.createServer((req, res) => {
    const data = { message: 'Hello world'};

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Connection", "close");
    res.statusCode = 200;
    res.end(JSON.stringify(data));
})

server.listen(port, host, () => {
    console.log(`server is running at http://${host}:${port}`);
})