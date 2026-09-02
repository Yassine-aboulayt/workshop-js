let prompt = require('prompt-sync')();

let temperatureCelsius = Number(prompt('Entrez une température en Celsius :'));

let temperatureKelvin = temperatureCelsius + 273.15;

console.log('Température en Kelvin :', temperatureKelvin, 'K');
