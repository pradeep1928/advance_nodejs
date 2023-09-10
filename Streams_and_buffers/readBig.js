const { ReadStream } = require('fs');
const fs = require('fs/promises');

/* The code block is an asynchronous function that reads data from a file named 'big_src.txt'
and writes it to another file named 'big_dest.txt'. */
// (async () => {
//     const fileHandleRead = await fs.open('big_src.txt', 'r');
//     const fileHandleWrite = await fs.open('big_dest.txt', 'w');

//     const streamRead = fileHandleRead.createReadStream({ highWaterMark: 64 * 1024});
//     const streamWrite = fileHandleWrite.createWriteStream();


//     streamRead.on('data', (chunk) => {
//         if (!streamWrite.write(chunk)) {
//             streamRead.pause();
//         }
//     });

//     streamWrite.on('drain', () => {
//         streamRead.resume()
//     })
// })();



/* The code is an asynchronous function that reads data from a file named 'sample_text.txt' and writes
modified data to a file named 'modified_text.txt'. */
(async () => {
    console.time('readBig')
    const fileHandleRead = await fs.open('sample_text.txt', 'r');
    const fileHandleWrite = await fs.open('modified_text.txt', 'w');

    const streamRead = fileHandleRead.createReadStream({ highWaterMark: 64 * 1024 });
    const streamWrite = fileHandleWrite.createWriteStream();

    let splitAt = "";
    streamRead.on('data', (chunk) => {
        const numberArr = chunk.toString("utf-8").split("  ");

        if (Number(numberArr[0]) !== Number(numberArr[1]) - 1) {
            if (splitAt) {
                numberArr[0] = splitAt.trim() + numberArr[0].trim()
            }
        }

        if (Number(numberArr[numberArr.length - 2]) + 1 !== Number(numberArr[numberArr.length - 1])) {
            splitAt = numberArr.pop();
        }

        console.log(numberArr);

        numberArr.forEach((number) => {
            let n = Number(number);
            if (n % 2 === 0) {
                if (!streamWrite.write(" " + n + " ")) {
                    streamRead.pause()
                }
            }
        })
    });

    streamWrite.on('drain', () => {
        streamRead.resume()
    });

    streamRead.on("end", () => {
        console.log("Done reading!!!");
        console.timeEnd('readBig')
    })
})();