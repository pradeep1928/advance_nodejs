const { Transform } = require('stream');
const fs = require('fs/promises');

/* The Decrypt class is a subclass of the Transform class in JavaScript that takes a chunk of data and
decreases each element by 1, except for elements that are already 255. */
class Decrypt extends Transform {
    _transform(chunk, encoding, callback) {
        for (let i = 0; i < chunk.length; ++i) {
            if (chunk[i] !== 255) {
                chunk[i] = chunk[i] - 1;
            }
        }
        callback(null, chunk);
        // this.push(chunk)
    }
}

(async () => {
    const readFileHandle = await fs.open('encrypted.txt', 'r');
    const writeFilehandle = await fs.open('decrypted.txt', 'w');

    const readStream = readFileHandle.createReadStream();
    const writeStream = writeFilehandle.createWriteStream();
    
    const decrypt = new Decrypt();

    readStream.pipe(decrypt).pipe(writeStream);
})()
