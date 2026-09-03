let prompt = require('prompt-sync')();

let joursAccordes = Number(prompt('Entrez le nombre total de jours accordés : '));
let joursUtilises = Number(prompt('Entrez le nombre de jours utilisés : '));
let statut = Number(prompt('Statut (0: temps partiel, 1: temps plein) : '));
let joursDisponibles;

if (statut === 1) {
  joursDisponibles = joursAccordes;
} else if (statut === 0) {
  joursDisponibles = joursAccordes / 2;
} else {
  console.log('Statut invalide.');
}

if (statut === 0 || statut === 1) {
  if (joursUtilises > joursDisponibles) {
    console.log('Alerte : le nombre de jours utilisés dépasse les jours accordés.');
  } else {
    console.log('Jours de congé restants :', joursDisponibles - joursUtilises);
  }
}
