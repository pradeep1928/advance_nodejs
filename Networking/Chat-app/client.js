const net = require('net');
const readline = require('readline/promises');

/* The following code is creating an interface for reading input from the user and writing output to the console. */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * The clearLine function clears the current line in the console output.
 * @param direction - The `direction` parameter in the `clearLine` function is used to specify which
 * part of the current line should be cleared. It can have one of the following values: 0, 1, -1
 * @returns The `clearLine` function returns a Promise.
 */
const clearLine = (direction) => {
    return new Promise((resolve, reject) => {
        process.stdout.clearLine(direction, () => {
            resolve();
        })
    })
}

/**
 * The `moveCursor` function moves the cursor in the terminal by a specified number of columns and
 * rows.
 * @param dx - The dx parameter represents the number of columns to move the cursor horizontally. A
 * positive value will move the cursor to the right, while a negative value will move it to the left.
 * @param dy - The `dy` parameter represents the number of rows to move the cursor. A positive value
 * will move the cursor down, while a negative value will move the cursor up.
 * @returns The `moveCursor` function returns a Promise.
 */
const moveCursor = (dx, dy) => {
    return new Promise((resolve, reject) => {
        process.stdout.moveCursor(dx, dy, () => {
            resolve();
        })
    })
}

/* The code is creating a TCP socket connection to a server running on the local machine at IP address
'127.0.0.1' and port number 3001. */
const socket = net.createConnection({ host: '127.0.0.1', port: 3001 }, async () => {
    console.log('Connected to the server.');

    const ask = async () => {
        const message = await rl.question('Enter a message > ');
        // Move the cursor one line up.
        await moveCursor(0, -1);
        // Clear the entire line that the cursor is in.
        await clearLine(0);
        socket.write(message)
    }

    ask()

    socket.on('data', async (data) => {
        // Log an empty line to the console.
        console.log();
        // Move the cursor one line up.
        await moveCursor(0, -1);
        // Clear the entire line that the cursor is in.
        await clearLine(0);
        console.log(data.toString('utf-8'))
        ask()
    })

});


socket.on('end', () => {
    console.log(`server ended.`)
})
