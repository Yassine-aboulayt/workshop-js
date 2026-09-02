const prompt = require('prompt-sync')();

const temperature = Number(prompt('Entrez la température en Celsius :'));

if (temperature < 0) {
  console.log('est solide');
} else if (temperature < 100) {
  console.log('est liquide');
} else {
  console.log('est gazeuse');
}
