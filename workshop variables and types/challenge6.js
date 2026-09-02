const prompt = require('prompt-sync')();

const a = Number(prompt('Entrez le premier nombre :'));
const b = Number(prompt('Entrez le deuxième nombre :'));
console.log('a + b =', a + b);
console.log('a - b =', a - b);
console.log('a * b =', a * b);

if (b !== 0) {
  console.log('a / b =', a / b);
} else {
  console.log('Division impossible');
}
