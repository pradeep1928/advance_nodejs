const net = require('net');

/* The code is creating a TCP server using the `net` module in Node.js. The `net.createServer()` method
is used to create a new TCP server. It takes a callback function as an argument, which will be
executed whenever a new connection is established with a client. */
const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(data.toString('utf-8'));
    })
})

server.listen(3044, '127.0.0.1', () => {
    console.log(`opened server`, server.address());
})