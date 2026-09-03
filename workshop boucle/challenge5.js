let prompt = require('prompt-sync')();

let base = Number(prompt('Entrez la base : '));
let exposant = Number(prompt('Entrez un exposant entier positif ou nul : '));
let resultat = 1;

if (Number(exposant) && exposant >= 0) {
  for (let i = 1; i <= exposant; i++) {
    resultat *= base;
  }
  console.log(`${base}^${exposant} = ${resultat}`);
} else {
  console.log('Veuillez entrer un exposant entier positif ou nul.');
}
