function minimum(a, b) {
  if (a < b) {
    return a;
  }

  return b;
}

let resultat = minimum(12, 8);
console.log(`Le minimum est : ${resultat}`);
