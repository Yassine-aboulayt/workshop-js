const prompt = require('prompt-sync')();

const celsius = Number(prompt('Entrez Celsius :'));
const kelvin = celsius + 273.15;
console.log('Kelvin :', kelvin, 'K');
