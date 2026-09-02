let prompt = require('prompt-sync')();

let n = Number(prompt('Entrez un nombre entier positif : '));
let nombresImpairs = [];

if (Number.isInteger(n) && n >= 1) {
  for (let i = 0; i < n; i++) {
    nombresImpairs.push(i * 2 + 1);
  }
  console.log(nombresImpairs.join(', '));
} else {
  console.log('Veuillez entrer un nombre entier positif.');
}
