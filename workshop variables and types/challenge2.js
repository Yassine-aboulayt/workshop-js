let prompt = require('prompt-sync')();

let temperatureCelsius = Number(prompt('Entrez une température en Celsius :'));

// Pour passer de Celsius à Kelvin, on ajoute 273,15.
let temperatureKelvin = temperatureCelsius + 273.15;

console.log('Température en Kelvin :', temperatureKelvin, 'K');
