const path = require('path');

console.log(path.sep);


// join method normalizes the path, it removes extra forward slashes, etc.

const filePath = path.join('///content', 'subfolder', 'test.txt'); 

console.log(filePath);



// base returns the last segment of the path

const base = path.basename(filePath);
console.log(base); // returns test.txt;


// resolve returns absolute path.

const absolute = path.resolve('content', 'subfolder', 'test.txt');
console.log(absolute);