// os module

const os = require('os');

const userInfo = os.userInfo(); // gives us info about user.
// console.log(userInfo);

//method returns the system uptime in seconds.

const upTime = os.uptime();
// console.log(`The System Uptime is ${upTime} seconds`);

const osInformation = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(osInformation);