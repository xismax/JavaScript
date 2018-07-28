'use strict'

//ejercicio 3

/*
mostrar todos los numeros entre 2 numeros introducidos por el usuario
*/

var numero1 = Number(prompt("Ingrese el primer numero"));
var numero2 = Number(prompt("Ingrese el segundo numero"));
console.log(numero1, numero2);

do {
    var suma = numero1++;
    alert("Los numeros entre los 2 numeros ingresados son: " + suma);
} while (suma < numero2);

/*asi lo resolvio el gil del curso, con cosas que no vimos

 document.write("<h1> De " + numero1 + " a " + numero2 + " estan estos numeros:</h1>")
 for (var i = numero1; i <= numero2; i++){
     document.write(i+ "<br/>");
 }
*/