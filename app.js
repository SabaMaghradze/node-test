const lodash = require('lodash');

let nestedArray = [1, [2, [3, 4]]];

let flattenedArray = lodash.flattenDeep(nestedArray);
console.log(flattenedArray);