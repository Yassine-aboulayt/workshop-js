const prompt = require('prompt-sync')();

const premierNombre = Number(prompt('Entrez le premier nombre :'));
const deuxiemeNombre = Number(prompt('Entrez le deuxième nombre :'));

console.log('Addition :', premierNombre + deuxiemeNombre);
console.log('Soustraction :', premierNombre - deuxiemeNombre);
console.log('Multiplication :', premierNombre * deuxiemeNombre);

// On ne peut pas diviser par zéro.
if (deuxiemeNombre !== 0) {
  console.log('Division :', premierNombre / deuxiemeNombre);
} else {
  console.log('Division impossible');
}
