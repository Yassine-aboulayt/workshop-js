const prompt = require('prompt-sync')();

const chaine1 = prompt('Entrez la premiere chaine : ') ?? '';
const chaine2 = prompt('Entrez la deuxieme chaine : ') ?? '';

if (chaine1.length === chaine2.length && chaine1.includes(chaine2)) {
  console.log('Les chaines sont egales.');
} else {
  console.log('Les chaines sont differentes.');
}
