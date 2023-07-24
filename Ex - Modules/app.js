const { getArrLength } = require('./arrUtils');

const arrayOfStrings = ['Hello', 'World', 'Node.js', 'Modules'];

const totalLength = getArrLength(arrayOfStrings);

console.log("Total length of all strings in the array:", totalLength);