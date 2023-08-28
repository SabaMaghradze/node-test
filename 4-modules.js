const names = require('./2-names');
const sayHi = require('./3-sayHi');

sayHi(names.John); //note that the names variable is an object.

setTimeout(() => {
    console.log('ayo wassup')
}, 1000);
