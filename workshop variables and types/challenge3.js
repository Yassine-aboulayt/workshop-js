let prompt = require('prompt-sync')();

let distanceKm = Number(prompt('Entrez la distance en kilomètres :'));

// Un kilomètre correspond à 1093,61 yards.
let distanceYards = distanceKm * 1093.61;

console.log('Distance en yards :', distanceYards);
