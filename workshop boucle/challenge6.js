let prompt = require('prompt-sync')();

let n = Number(prompt('Entrez un nombre entier positif : '));
let resultat = '';

if (Number.isInteger(n) && n > 0) {
  for (let i = 1; i <= n; i++) {
    resultat += `${i * 2}${i < n ? ', ' : ''}`;
  }
  console.log(`Les ${n} premiers nombres pairs sont : ${resultat}`);
} else {
  console.log('Veuillez entrer un nombre entier positif.');
}
