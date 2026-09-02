let prompt = require('prompt-sync')();

let vitesseKmh = Number(prompt('Entrez la vitesse en km/h :'));

let vitesseMs = vitesseKmh * 0.27778;

console.log('Vitesse en m/s :', vitesseMs);
