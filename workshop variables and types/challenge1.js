let prompt = require('prompt-sync')();

let nom = prompt('Entrez votre nom :');
let prenom = prompt('Entrez votre prénom :');
let age = Number(prompt('Entrez votre âge :'));
let sexe = prompt('Entrez votre sexe :');
let email = prompt('Entrez votre adresse e-mail :');

console.log('Nom :', nom);
console.log('Prénom :', prenom);
console.log('Âge :', age);
console.log('Sexe :', sexe);
console.log('E-mail :', email);
