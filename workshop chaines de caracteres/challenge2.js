const prompt = require('prompt-sync')();

let texte = prompt("Entrez une chaîne :");
let compteur = texte.length;

console.log(`La longueur de "${texte}" est de ${compteur} caractères.`);
