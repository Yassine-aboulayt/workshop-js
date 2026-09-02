const prompt = require('prompt-sync')();

const temperature = Number(prompt('Entrez la température en Celsius :'));

// L'eau est solide sous 0 °C, liquide avant 100 °C, puis gazeuse.
if (temperature < 0) {
  console.log("L'eau est solide.");
} else if (temperature < 100) {
  console.log("L'eau est liquide.");
} else {
  console.log("L'eau est gazeuse.");
}
