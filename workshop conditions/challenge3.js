let prompt = require('prompt-sync')();

let premiereValeur = Number(prompt('Entrez la première valeur entière : '));
let deuxiemeValeur = Number(prompt('Entrez la deuxième valeur entière : '));
let somme = premiereValeur + deuxiemeValeur;

if (premiereValeur === deuxiemeValeur) {
  console.log('Le triple de leur somme est :', somme * 3);
} else {
  console.log('La somme est :', somme);
}
