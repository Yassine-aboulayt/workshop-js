const prompt = require('prompt-sync')();

const distanceKm = Number(prompt('Entrez la distance en kilomètres :'));

// Un kilomètre correspond à 1093,61 yards.
const distanceYards = distanceKm * 1093.61;

console.log('Distance en yards :', distanceYards);
