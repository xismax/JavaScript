'use strict'

//ALERTA
alert("Esta es mi alerta!!");
alert("Este es mi segundo alerta!!");

//CONFIRMACION
confirm("Estas seguro de querer continuar?");

//para verificarlo metemos el confirm en una variable y lo imprimimos por consola devuelve true or false depende la seleccion
var mi_resultado = confirm("Estas seguro de querer continuar?");
console.log(mi_resultado);


//INGRESO DATOS
prompt("Que edad tienes??", 18);

//para verificarlo metemos el prompt en una variable y lo imprimimos por consola para ver el valor ingresado por el usuario
var mi_resultado = prompt("Que edad tienes??");
console.log(mi_resultado); //me devuelve un string seguramente, se puede usar las funciones number o parseint parsefloat para pasarlo a numero

