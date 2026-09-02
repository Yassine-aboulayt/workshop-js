let prompt = require('prompt-sync')();

let nombre1 = Number(prompt('Entrez le premier nombre :'));
let nombre2 = Number(prompt('Entrez le deuxième nombre :'));
let nombre3 = Number(prompt('Entrez le troisième nombre :'));

let moyenne = (nombre1 * 2 + nombre2 * 3 + nombre3 * 5) / 10;

console.log('Moyenne pondérée :', moyenne);
