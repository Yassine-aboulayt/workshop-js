const prompt = require('prompt-sync')();

// Demander les informations à l'utilisateur.
const nom = prompt('Entrez votre nom :');
const prenom = prompt('Entrez votre prénom :');
const age = Number(prompt('Entrez votre âge :'));
const sexe = prompt('Entrez votre sexe :');
const email = prompt('Entrez votre adresse e-mail :');

// Afficher les informations saisies.
console.log('Nom :', nom);
console.log('Prénom :', prenom);
console.log('Âge :', age);
console.log('Sexe :', sexe);
console.log('E-mail :', email);
