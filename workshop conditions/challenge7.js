let prompt = require('prompt-sync')();

let caractere = prompt('Entrez un caractère : ');
let codeAscii = caractere.charCodeAt(0);

if (caractere.length === 1 && codeAscii >= 65 && codeAscii <= 90) {
  console.log('C\'est une lettre majuscule.');
} else {
  console.log('Ce n\'est pas une lettre majuscule.');
}
