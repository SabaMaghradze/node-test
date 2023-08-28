const fs = require('fs');

const first = fs.readFileSync('./content/first.txt', 'utf8');
const second = fs.readFileSync('./content/second.txt', 'utf8');

console.log(first, second);


// the alternative way of doing this is destructuring the fs module's methods into variables.

const { readFileSync, writeFileSync } = require('fs');

const firstAlt = readFileSync('./content/first.txt', 'utf8');
const secondAlt = readFileSync('./content/second.txt', 'utf8');

console.log(firstAlt, secondAlt);


// create a file and decide it's content.

writeFileSync('./content/result-sync.txt', `here is the result: ${firstAlt}, ${secondAlt}`); 



