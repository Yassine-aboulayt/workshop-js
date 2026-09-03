let prompt = require('prompt-sync')();

let revenuAnnuel = Number(prompt('Entrez votre revenu annuel en euros : '));
let scoreCredit = Number(prompt('Entrez votre score de crédit : '));
let dureePret = Number(prompt('Entrez la durée du prêt en années : '));

if (revenuAnnuel >= 30000 && scoreCredit >= 700 && dureePret <= 10) {
  console.log('Vous êtes éligible pour le prêt.');
} else if (revenuAnnuel >= 30000 && scoreCredit >= 650 && dureePret <= 15) {
  console.log('Vous êtes éligible avec conditions.');
} else {
  console.log('Vous n\'êtes pas éligible pour le prêt.');
}
