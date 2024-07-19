const { pipeline } = require('stream')
const fs = require('fs/promises');


    /* The code is using an immediately invoked async function expression (IIFE) to perform a file copy
    operation. */
    // * do it for small file size 
    // * file size - 20mb
    // * execution time - 46ms
    // (async () => {
    //     console.time('copy');
    //     const destFile = await fs.open('destFile.txt', 'w');
    //     const result = await fs.readFile('srcFile.txt');

    //     await destFile.write(result);
    //     console.timeEnd('copy')
    // })();





    // * do it for big file size - use of pipe
    // * file size - 121mb
    // * execution time - 480ms
    // (async () => {
    //     try {
    //         console.time('copy');
    //         const srcFile = await fs.open('srcFile.txt', 'r');
    //         const destFile = await fs.open('destFile.txt', 'w');

    //         const readStream = srcFile.createReadStream();
    //         const writeStream = destFile.createWriteStream();

    //         /* If `readableFlowing` is `true`, it means that the stream is in flowing mode. If it
    //         is `false`, it means that the stream is in paused mode and data needs to be
    //         explicitly read using the `read()` method. */
    //         console.log(readStream.readableFlowing);

    //         /* `readStream.pipe(writeStream)` is a method in Node.js that is used to pipe the data from a
    //         readable stream (`readStream`) to a writable stream (`writeStream`). */
    //         readStream.pipe(writeStream);
    //         console.log(readStream.readableFlowing);

    //         /* `readStream.unpipe(writeStream)` is a method in Node.js that is used to remove the pipe
    //         connection between a readable stream (`readStream`) and a writable stream (`writeStream`). */
    //         readStream.unpipe(writeStream);
    //         console.log(readStream.readableFlowing);

    //         readStream.pipe(writeStream);
    //         console.log(readStream.readableFlowing);

    //         readStream.on('end', () => {
    //             console.timeEnd('copy')
    //         })

    //     } catch (error) {
    //         console.log('Error in copying big file', error)
    //     }
    // })();


// * do it for big file size - use of pipeline, require from stream
// * file size - 121mb
// * execution time - 470ms
(async () => {
    try {
        console.time('copy');
        const srcFile = await fs.open('srcFile.txt', 'r');
        const destFile = await fs.open('destFile.txt', 'w');

        const readStream = srcFile.createReadStream();
        const writeStream = destFile.createWriteStream();

        /* The `pipeline` function is a utility function provided by the `stream` module in Node.js. It is used to efficiently pipe data from a readable stream to a writable stream. */
        pipeline(readStream, writeStream, (err) => {
            if (err) {
                console.log('Error in pipeline', err);
            } else {
                console.log('Done!!');
                console.timeEnd('copy')
            }
        })

    } catch (error) {
        console.log('Error in copying big file', error)
    }
})();






