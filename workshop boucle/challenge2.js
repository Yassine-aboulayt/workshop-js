let prompt = require('prompt-sync')();

let n = Number(prompt('Entrez un nombre entier positif : '));
let factorielle = 1;

if (Number.isInteger(n) && n >= 0) {
  for (let i = 1; i <= n; i++) {
    factorielle *= i;
  }
  console.log(`${n}! = ${factorielle}`);
} else {
  console.log('Veuillez entrer un nombre entier positif.');
}
