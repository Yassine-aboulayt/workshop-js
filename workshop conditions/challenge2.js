let prompt = require('prompt-sync')();

let caractere = prompt('Entrez un caractère : ').toLowerCase();

switch (caractere) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
  case 'y':
    console.log('C\'est une voyelle.');
    break;
  default:
    console.log('Ce n\'est pas une voyelle.');
}
