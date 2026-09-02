let prompt = require('prompt-sync')();

let annee = Number(prompt('Entrez un nombre d\'années : '));
let choix = prompt('Choisissez la conversion (mois, jours, heures, minutes, secondes) : ').toLowerCase();

switch (choix) {
  case 'mois':
    console.log(annee, 'an(s) =', annee * 12, 'mois');
    break;
  case 'jours':
    console.log(annee, 'an(s) =', annee * 365, 'jours');
    break;
  case 'heures':
    console.log(annee, 'an(s) =', annee * 365 * 24, 'heures');
    break;
  case 'minutes':
    console.log(annee, 'an(s) =', annee * 365 * 24 * 60, 'minutes');
    break;
  case 'secondes':
    console.log(annee, 'an(s) =', annee * 365 * 24 * 60 * 60, 'secondes');
    break;
  default:
    console.log('Choix invalide.');
}
