const { Transform } = require('stream');
const fs = require('fs/promises');

/* The Encrypt class is a subclass of Transform that increments each element in a chunk of data by 1. */
class Encrypt extends Transform {
    _transform(chunk, encoding, callback) {
        for (let i = 0; i < chunk.length; ++i) {
            if (chunk[i] !== 255) {
                chunk[i] = chunk[i] + 1;
            }
        }
        // this.push(chunk)
        callback(null, chunk);
    }
}

(async () => {
    const readFileHandle = await fs.open('readFile.txt', 'r');
    const writeFilehandle = await fs.open('encrypted.txt', 'w');

    const readStream = readFileHandle.createReadStream();
    const writeStream = writeFilehandle.createWriteStream();
    
    const encrypt = new Encrypt();

    readStream.pipe(encrypt).pipe(writeStream);
})()
