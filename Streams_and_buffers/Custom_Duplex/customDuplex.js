const { Duplex } = require('stream');
const fs = require('fs')

/* The `DuplexStream` class is a subclass of `Duplex` that represents a duplex stream with read and
write functionality, allowing data to be read from a file and written to another file. */
class DuplexStream extends Duplex {
    constructor({ writableHighWaterMark, readableHighWaterMark, readFileName, writeFileName}) {
        super({ writableHighWaterMark, readableHighWaterMark});
        this.readFileName = readFileName;
        this.writeFileName = writeFileName;
        this.readFd = null;
        this.writeFd = null;
        this.chunk = [];
        this.chunkSize = 0;
    }

    _construct(callback) {
        fs.open(this.readFileName, 'r', (err, readFd) => {
            if (err) return callback(err);
            this.readFd = readFd;
            fs.open(this.writeFileName, 'w', (err, writeFd) => {
                if (err) return callback(err);
                this.writeFd = writeFd;
                callback();
            })
        })
    }

    _write(chunk, encoding, callback) {
        this.chunk.push(chunk);
        this.chunkSize += chunk.length;

        if (this.chunkSize > this.writableHighWaterMark) {
            fs.write(this.writeFd, Buffer.concat(this.chunk), (err) => {
                if (err) {
                    return callback(err);
                }
                this.chunk = [];
                this.chunkSize = 0;
                callback();
            })
        } else {
            callback()
        }
    }

    _read(size) {
        const buff = Buffer.alloc(size);
        fs.read(this.readFd, buff, 0, size, null, (err, bytesread) => {
            if (err) {
                return this.destroy(err);
            } else {
                this.push(bytesread > 0 ? buff.subarray(0, bytesread) : null);
            }
        })
    }

    _final(callback) {
        fs.write(this.writeFd, Buffer.concat(this.chunk), (err) => {
            if (err) return callback(err);
            this.chunk = [];
            callback();
        })
    }

    _destroy(err, callback) {
        callback(err);
    }
}


const duplex = new DuplexStream({
    readFileName: 'readFile.txt',
    writeFileName: 'writeFile.txt'
})

duplex.write(Buffer.from('This is a string 0 \n'));
duplex.write(Buffer.from('This is a string 1 \n'));
duplex.write(Buffer.from('This is a string 2 \n'));
duplex.write(Buffer.from('This is a string 3 \n'));
duplex.write(Buffer.from('This is a string 4 \n'));
duplex.end(Buffer.from('This is end of write\n'));


duplex.on('data', (chunk) => {
    console.log(chunk.toString('utf-8'))
})