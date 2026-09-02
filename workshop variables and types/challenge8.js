let prompt = require('prompt-sync')();

let premierNombre = Number(prompt('Entrez le premier nombre :'));
let deuxiemeNombre = Number(prompt('Entrez le deuxième nombre :'));
let troisiemeNombre = Number(prompt('Entrez le troisième nombre :'));

// La moyenne géométrique est la racine cubique du produit des trois nombres.
let moyenneGeometrique = (premierNombre * deuxiemeNombre * troisiemeNombre) ** (1 / 3);

console.log('Moyenne géométrique :', moyenneGeometrique);
