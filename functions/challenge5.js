function factorielle(n) {
  let resultat = 1;

  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }

  return resultat;
}

let nombre = 5;
console.log(`La factorielle de ${nombre} est : ${factorielle(nombre)}`);
