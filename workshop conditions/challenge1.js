const prompt = require('prompt-sync')();

const nombre = Number(prompt('Entrez un nombre : '));

if (nombre % 2 == 0) {
  console.log('Le nombre est pair.');
} else {
  console.log('Le nombre est impair.');
}
