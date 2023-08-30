const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {         // sets the logic
    console.log(`data received from user ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
    console.log(`Some other logic here`);
});

customEmitter.emit('response', 'john', 34);              // discharges the logic/response
