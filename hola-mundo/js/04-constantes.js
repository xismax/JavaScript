'use strict'

//constantes
//es como una variable, pero su valor no puede cambiar

var web = "https://www.google.com";
const ip = "192.88.0.12";
console.log(web, ip); //google y 192.88.0.12

//cambio el valor de web
web = "https://www.ole.com.ar";
console.log(web, ip); //ole y 192.88.0.12

//intento cambiar valor de ip
ip = "456456";
console.log(web, ip); //error por querer cambiar la constante