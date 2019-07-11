// you're requiring or importing the my-library module, which you previously exported here
const myLibrary = require('./my-library');
// execute my-library here
myLibrary.myFirstMethod();

const uuid = require('uuid');
const newUuid = uuid();

console.log(`your new Universally unique identifier is ${newUuid}`);