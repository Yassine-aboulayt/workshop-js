const prompt = require('prompt-sync')();

const vitesseKmh = Number(prompt('Entrez la vitesse en km/h :'));

// Pour convertir des km/h en m/s, on multiplie par 0,27778.
const vitesseMs = vitesseKmh * 0.27778;

console.log('Vitesse en m/s :', vitesseMs);
