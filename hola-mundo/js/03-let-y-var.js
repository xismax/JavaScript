'use strict'
//pruebas con let y var

//prueba con VAR
var numero = 40; 
console.log(numero); //valor 40

if (true) {
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

//prueba con LET
var texto = "curso JS";
console.log(texto); //texto curso JS

if (true) {
    let texto = "usando LET"
    console.log(texto); //texto usando LET
}

console.log(texto); //texto curso JS