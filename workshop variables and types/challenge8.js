const prompt = require('prompt-sync')();

const premierNombre = Number(prompt('Entrez le premier nombre :'));
const deuxiemeNombre = Number(prompt('Entrez le deuxième nombre :'));
const troisiemeNombre = Number(prompt('Entrez le troisième nombre :'));

// La moyenne géométrique est la racine cubique du produit des trois nombres.
const moyenneGeometrique = (premierNombre * deuxiemeNombre * troisiemeNombre) ** (1 / 3);

console.log('Moyenne géométrique :', moyenneGeometrique);
