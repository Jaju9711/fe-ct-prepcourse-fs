function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  let min = Math.min(a , b);
  let max = Math.max(a, b);

  let producto = 1;
  for(let i=min; i<=max; i++){
    producto *= i;
  }
  return producto === 0 ? 0 : producto;
}

module.exports = productoEntreNúmeros;