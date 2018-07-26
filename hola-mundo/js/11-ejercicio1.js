'use strict'

/*
programa que pida 2 numeros, que nos diga cual es el mayor, el menor y si son iguales.
*/

var numero1 = prompt("Ingrese el primer numero: ");
console.log(numero1);

var numero2 = prompt("Ahora ingrese el segundo numero: ");
console.log(numero2);

if (numero1 > numero2) {
    console.log("El primer numero ingresado es mayor que el segundo");
} else if (numero1 == numero2) {
    console.log("Ambos numeros ingresados son iguales");
    } else {
    console.log("El primer numero ingresado es menor que el segundo");
}