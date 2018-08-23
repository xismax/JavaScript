'use strict'

/* ejercicio 5

muestre todos los numeros divisores de un numero introducido en un prompt
*/

var numero = parseInt(prompt("Introduce el numero", 1));

for (var i = 1; i <= numero; i++){
    if (numero%i ==0) {
        console.log("Divisor: "+i);
    }
}