const net = require('net');

const port = 3001;
const hostname = '127.0.0.1';

const server = net.createServer()

let clients = [];
/* This code block is an event listener that is triggered whenever a new client connects to the server. */
server.on('connection', (socket) => {
    console.log('A new connection to the server.')

    socket.on('data', (data) => {
        clients.map((s) => {
            s.write(data)
        })
    })
    clients.push(socket)
});


server.listen(port, hostname, () => {
    console.log(`opened server`, server.address());
})