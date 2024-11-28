//Ejercicio 2: Crea un programa que imprima los números del 1 al 20. Para los números divisibles entre 3, imprime "Fizz". Para los números divisibles entre 5, imprime "Buzz". Si son divisibles entre ambos, imprime "FizzBuzz".
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  