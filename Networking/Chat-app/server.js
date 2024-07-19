const net = require('net');

const port = 3001;
const hostname = '127.0.0.1';

const server = net.createServer()

let clients = [];

/* The code block `server.on('connection', (socket) => { ... })` is an event listener that is triggered
whenever a new client connects to the server. */
server.on('connection', (socket) => {
    console.log('A new connection to the server.')

    const clientId = clients.length + 1;
    socket.write(`id-${clientId}`)

    socket.on('data', (data) => {
        const dataString = data.toString('utf-8');
        const id = dataString.substring(0, dataString.indexOf('-'));
        const message = dataString.substring(dataString.indexOf('-message-') + 9)
        clients.map((client) => {
            client.socket.write(`> User ${id}: ${message}`)
        })
    })
    clients.push({id: clientId.toString(), socket})
});


server.listen(port, hostname, () => {
    console.log(`opened server`, server.address());
})