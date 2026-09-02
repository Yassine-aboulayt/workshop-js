const prompt = require('prompt-sync')();

const km = Number(prompt('Entrez la distance en km :'));
const yards = km * 1093.61;
console.log('Distance en yards :', yards);
