const prompt = require('prompt-sync')();

const texte = prompt('Entrez une chaine : ') ?? '';

console.log(texte.slice(0));
