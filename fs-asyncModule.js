// const fs = require('fs');

// const { readFile, writeFile } = require('fs');

// nesting callbacks way

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const second = result;
//         writeFile('./content/result-async.txt', `${first}, ${second}`, (err, result) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log(result);
//         });
//     })
// });

// async way

const fs = require('fs').promises;
// const util = require('util');
// const writeFilePromise = util.promisify(fs.writeFile);
// const readFilePromise = util.promisify(fs.readFile);


async function start() {
    try {
        const first = await fs.readFile('./content/first.txt');
        const second = await fs.readFile('./content/second.txt');
        await fs.writeFile('./content/asyncFuncText.txt', `well, we made it.`);
        console.log('hello');
    } catch (error) {
        console.log(error);
    }
};

start();