let prompt = require('prompt-sync')();

let primeBase = Number(prompt('Entrez la prime de base en euros : '));
let age = Number(prompt('Entrez l\'âge du conducteur : '));
let typeVoiture = Number(prompt('Type de voiture (1: sportive, 2: utilitaire, 3: familiale) : '));
let accidents = Number(prompt('Entrez le nombre d\'accidents des 5 dernières années : '));
let prime = primeBase;

if (age < 25) {
  prime *= 1.5;
} else if (age > 65) {
  prime *= 1.2;
}

if (typeVoiture === 1) {
  prime *= 2;
} else if (typeVoiture === 2) {
  prime *= 1.2;
} else if (typeVoiture === 3) {
  prime *= 1.1;
} else {
  console.log('Type de voiture invalide.');
}

if (accidents > 1) {
  prime *= 1.3;
}

if (typeVoiture >= 1 && typeVoiture <= 3) {
  console.log('La prime d\'assurance est de :', prime.toFixed(2), '€');
}
