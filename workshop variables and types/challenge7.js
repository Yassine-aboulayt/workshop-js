const prompt = require('prompt-sync')();

const nombre1 = Number(prompt('Entrez le premier nombre :'));
const nombre2 = Number(prompt('Entrez le deuxième nombre :'));
const nombre3 = Number(prompt('Entrez le troisième nombre :'));

// Les coefficients sont 2, 3 et 5. Leur total est 10.
const moyenne = (nombre1 * 2 + nombre2 * 3 + nombre3 * 5) / 10;

console.log('Moyenne pondérée :', moyenne);
