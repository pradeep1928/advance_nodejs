const { Readable } = require('stream');
const fs = require('fs');

class FileReadStream extends Readable {
    constructor({ highWaterMark, fileName }) {
        super({ highWaterMark });
        this.fileName = fileName;
        this.fd = null
    }

/**
 * The `_construct` function opens a file in read mode and assigns the file descriptor to the object's
 * `fd` property.
 * @param callback - The `callback` parameter is a function that will be called once the file is
 * opened. It is used to handle any errors that occur during the file opening process and to perform
 * any necessary actions after the file is successfully opened.
 */
    _construct(callback) {
        fs.open(this.fileName, 'r', (err, fd) => {
            if (err) {
                return callback(err);
            } else {
                this.fd = fd;
                callback()
            }
        })
    }

/**
 * The `_read` function reads data from a file using the `fs.read` method and pushes the read data to a
 * stream.
 * @param size - The `size` parameter represents the number of bytes to read from the file. It
 * specifies the size of the buffer that will be allocated to store the data read from the file.
 */
    _read(size) {
        const buff = Buffer.alloc(size);
        fs.read(this.fd, buff, 0, size, null, (err, bytesread) => {
            if (err) {
                return this.destroy(err);
            } else {
                this.push(bytesread > 0 ? buff.subarray(0, bytesread) : null);
            }
        })
    }

/**
 * The `_destroy` function closes a file descriptor if it exists, otherwise it calls the callback
 * function with the given error.
 * @param error - The `error` parameter is an error object that represents any error that occurred
 * during the destruction process. It can be `null` if no error occurred.
 * @param callback - A callback function that will be called once the operation is complete. It takes
 * an error parameter, which will be null if the operation was successful, or an error object if there
 * was an error.
 */
    _destroy(error, callback) {
        if (this.fd) {
            fs.close(this.fd, (err) => callback(err || error));
        } else {
            callback(error)
        }
    }
}


const stream = new FileReadStream({ fileName: 'read.txt' });

stream.on('data', (chunk) => {
    console.log(chunk.toString('utf-8'));
})

stream.on('end', () => {
    console.log("Stream is done reading.")
})