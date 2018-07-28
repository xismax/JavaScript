'use strict'

//ejercicio 2
/*
utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo, ahi mostrar el resultado
*/

var suma = 0;
var contador = 0;

do {
    var numero = Number(prompt("Ingrese numeros hasta que ingrese uno negativo"));
    if (isNaN(numero)) {
        numero = 0;

    } else if (numero >= 0) {
        suma = suma + numero;
        contador++;
    }
    console.log(suma);
    console.log(contador);
} while (numero >= 0);

alert("La suma de los numeros ingresados es: " + suma);
alert("La media de los numeros ingresados es: " + (suma/contador));