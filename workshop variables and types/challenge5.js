let prompt = require('prompt-sync')();

let temperature = Number(prompt('Entrez la température en Celsius :'));

if (temperature < 0) {
  console.log("L'eau est solide.");
} else if (temperature < 100) {
  console.log("L'eau est liquide.");
} else {
  console.log("L'eau est gazeuse.");
}
