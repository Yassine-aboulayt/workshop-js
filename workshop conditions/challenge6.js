let prompt = require('prompt-sync')();

let nombre = Number(prompt('Entrez un nombre : '));

if (nombre > 0) {
  console.log('Le nombre est positif.');
} else if (nombre < 0) {
  console.log('Le nombre est négatif.');
} else {
  console.log('Le nombre est nul.');
}
