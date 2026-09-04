const prompt = require('prompt-sync')();

const chaine1 = prompt('Entrez la premiere chaine : ') ?? '';
const chaine2 = prompt('Entrez la deuxieme chaine : ') ?? '';

const resultat = chaine1 + chaine2;

console.log(resultat);
