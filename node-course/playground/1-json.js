const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// };
//to accept obj and convert to string
//const bookJSON = JSON.stringify(book); // stringify accepts only strings and return string
//console.log(bookJSON);
//console.log(bookJSON.author);undefined because it returns string and not object so obj prop cant beaccessed

//to access obj from stringify or to accept string and convert it to obj
//const parsedData = JSON.parse(bookJSON);
//console.log(parsedData.title);
//fs.writeFileSync('1-json.json',bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer);
const dataJSON = dataBuffer.toString();
const dataParsed = JSON.parse(dataJSON);
dataParsed.name = 'Bhavana';
dataParsed.age = 28;
const dataParsedJSON = JSON.stringify(dataParsed);
fs.writeFileSync('1-json.json',dataParsedJSON);

// console.log(dataParsed.title);