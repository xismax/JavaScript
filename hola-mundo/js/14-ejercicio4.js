'use strict'

/*ejercicio 4

mostrar todos los numeros impares que hay entre 2 numeros introducidos por el usuario 
*/

var numero1 = parseInt(prompt("Introduce el primer numero"));
var numero2 = parseInt(prompt("Introduce el segundo numero"));

while (numero1 < numero2) {
    numero1++;
    if (numero1%2 != 0) {
        console.log("El " +numero1+ " es impar");
    }
}