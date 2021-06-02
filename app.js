//1.modules
/*const { SomeMathObject } = require('./tutorial');
const tutorial = require('./tutorial');


console.log(tutorial.sum(15,11));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());*/


//1. Event module
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',() => {
    console.log('Tutorial event has occured');
});


eventEmitter.emit('tutorial');
