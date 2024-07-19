const net = require('net');

/* The code is creating a TCP socket connection to a server running on the local machine at IP address
'127.0.0.1' and port number 3044. Once the connection is established, it creates a buffer of size 8
bytes using `Buffer.alloc(8)`. It then assigns values 12 and 14 to the first two bytes of the buffer
using array indexing. Finally, it writes the contents of the buffer to the socket using
`socket.write(buff)`. */
const socket = net.createConnection({host: '127.0.0.1', port: 3044}, () => {
    const buff = Buffer.alloc(8);
    buff[0] = 12;
    buff[1] = 14;
    // buff[2] = 16;
    // buff[3] = 18;
    
    // socket.write("A simple message comming from simple sender.");
    socket.write(buff);
})