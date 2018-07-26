'use strict'

/*
programa que pida 2 numeros, que nos diga cual es el mayor, el menor y si son iguales.
PLUS: si los numeros no son numeros o son menores o iguales a 0 que vuelva a pedir los numeros.
*/

var numero1 = Number(prompt("Ingrese el primer numero: "));
var numero2 = Number(prompt("Ahora ingrese el segundo numero: "));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    alert("Los valores ingresados no son correctos. Por favor reingrese los numeros");
    numero1 = Number(prompt("Ingrese el primer numero: "));
    numero2 = Number(prompt("Ahora ingrese el segundo numero: "));
}

if (numero1 > numero2) {
    alert("El primer numero ingresado " + numero1 + " es mayor que el segundo numero ingresado " + numero2);
} else if (numero1 == numero2) {
    alert("Los numeros ingresados " + numero1 + " y " + numero2 + " son iguales");
} else if (numero1 < numero2){
    alert("El primer numero ingresado " + numero1 + " es menor que el segundo numero ingresado " + numero2);
}else{
    alert("Los valores ingresados no son correctos");
}

