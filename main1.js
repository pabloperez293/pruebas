//Ejercicio 3: Escribe una función que calcule el factorial de un número.
function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  console.log(factorial(3)); // Cambia el valor para probar
  