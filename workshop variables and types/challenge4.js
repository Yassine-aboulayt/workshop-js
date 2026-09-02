const prompt = require('prompt-sync')();

const vitesse = Number(prompt('Entrez la vitesse en km/h :'));
const vitesseMs = vitesse * 0.27778;
console.log('Vitesse :', vitesseMs);
