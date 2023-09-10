// *** ex - 1 using promise ***
// const fs = require('fs/promises');
// * Execution time = 19s
// * cpu process = 18%
// * memory uses = 23mb
// (async () => {
//     console.time('writemany');
//     const fileHandle = await fs.open('sample_text.txt', 'w');
//     for (let i = 0; i < 100000; i++) {
//         await fileHandle.write(` ${i} `)
//     }
//     console.timeEnd('writemany')
// })()


// *** ex - 2 not in sync ***
// const fs = require('fs');
// * Execution time = 1.2s
// * cpu process = 12%
// * memory uses = 90mb
// (async () => {
//     console.time('writemany');
//     fs.open("sample_text.txt", "w", (err, fd) => {
//         for (let i = 0; i < 100000; i++) {
//             fs.write(fd, ` ${i} `, () => {});
//         }
//         console.timeEnd('writemany')
//     });
// })()


// *** ex - 3 in sync ***  
// const fs = require('fs');
// * Execution time = 2.6s
// * cpu process = 9%
// * memory uses = 20mb
// (async () => {
//     console.time('writemany');
//     fs.open("sample_text.txt", "w", (err, fd) => {
//         for (let i = 0; i < 100000; i++) {
//             const buff = Buffer.from(` ${i} `, 'utf-8')
//             fs.writeSync(fd, buff);
//         }
//         console.timeEnd('writemany')
//     });
// })()


// *** ex - 4 using stream ***  
// const fs = require('fs/promises');
// * Execution time = 180 ms
// * cpu process = 0.5%
// * memory uses = 48 mb
// (async () => {
//     console.time('writemany');
//     const fileHandle = await fs.open("sample_text.txt", "w")
//     const stream = fileHandle.createWriteStream();
//     for (let i = 0; i < 100000; i++) {
//         const buff = Buffer.from(` ${i} `, 'utf-8')
//         stream.write(buff);
//     }
//     console.timeEnd('writemany')

// })()



// *** ex - 5 using stream with drain best method to use***  
const fs = require('fs/promises');
// * Execution time = 700 ms
// * cpu process = 0.5%
// * memory uses = 23 mb
(async () => {
    console.time('writemany');
    const fileHandle = await fs.open("sample_text.txt", "w")
    const stream = fileHandle.createWriteStream();
    console.log('--- High Watermark --- ', stream.writableHighWaterMark);

    let i = 0
    const bigData = 100000
    const writeManyFunc = () => {
        while (i < bigData) {
            const buff = Buffer.from(` ${i} `, 'utf-8')

            // This is our last write
            if (i == bigData - 1) {
                return stream.end(buff);
            }

            // if stream.write returns false stop the loop
            if (!stream.write(buff)) break;

            i++
        }
    };

    writeManyFunc();

    // resume the loop once stream's internal buffer is emptied
    stream.on('drain', () => {
        // console.log('Draining!!!')
        writeManyFunc();
    })

    stream.on('finish', () => {
        console.timeEnd('writemany')
        fileHandle.close()
    })

})()
