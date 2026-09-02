let prompt = require('prompt-sync')();

let n = Number(prompt('Entrez un nombre entier positif : '));
let somme = 0;

if (Number.isInteger(n) && n >= 1) {
  for (let i = 1; i <= n; i++) {
    somme += i;
  }
  console.log(`La somme des ${n} premiers nombres naturels est : ${somme}`);
} else {
  console.log('Veuillez entrer un nombre entier positif.');
}
