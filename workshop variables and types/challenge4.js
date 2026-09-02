let prompt = require('prompt-sync')();

let vitesseKmh = Number(prompt('Entrez la vitesse en km/h :'));

// Pour convertir des km/h en m/s, on multiplie par 0,27778.
let vitesseMs = vitesseKmh * 0.27778;

console.log('Vitesse en m/s :', vitesseMs);
