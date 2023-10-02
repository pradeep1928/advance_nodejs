const net = require('net');
const readline = require('readline/promises');

/* The following code is creating an interface for reading input from the user and writing output to the console. */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

/* The code is creating a TCP socket connection to a server running on the local machine at IP address
'127.0.0.1' and port number 3001. */
const socket = net.createConnection({ host: '127.0.0.1', port: 3001}, async () => {
    console.log('Connected to the server.');

    const message = await rl.question('Enter a message > ');
    socket.write(message)
});

socket.on('data', (data) => {
    console.log(data.toString('utf-8'))
})

socket.on('end', () => {
    console.log(`server ended.`)
})
