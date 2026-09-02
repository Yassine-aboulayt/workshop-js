const prompt = require('prompt-sync')();

const n1 = Number(prompt('Entrez le premier nombre :'));
const n2 = Number(prompt('Entrez le deuxième nombre :'));
const n3 = Number(prompt('Entrez le troisième nombre :'));
const moyenneGeometrique = (n1 * n2 * n3) ** (1 / 3);
console.log('Moyenne géométrique :', moyenneGeometrique);
