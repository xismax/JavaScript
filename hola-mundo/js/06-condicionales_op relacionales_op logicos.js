'use strict'

//uso de condicionales
// instrucciones que permiten hacer comparaciones. si A es igual/menor/igual a B entonces haz algo

var edad1 = 10;
var edad2 = 12;

/* Operadores relacionales
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=
*/

//si pasa esto
if (edad1 > edad2) {
    //ejecuta esto
    console.log("edad1 es mayor que edad2");
}else{
    console.log("la edad1 es inferior a la edad2");
}

var edad = 75; //proba con 15, 18, 33, 35, 70 y 75 para ver los distintos resultados
var nombre = 'David Suarez';


//ejemplo con if anidados
if (edad >= 18) { 
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");
    if (edad <= 33) {
        console.log("Todavia eres millenial");
    }else{
        console.log("Ya no eres millenials");
    }
}else{
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

//ejemplo con else if
if (edad >= 18) { 
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");
    if (edad <= 33) {
        console.log("Todavia eres millenial");
    }else if (edad >= 70){
        console.log("Eres anciano");
    }else{
        console.log("Ya no eres millenials"); 
    }
}else{
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

/* Operadores logicos
AND: &&
OR: ||
Negacion: !
*/

var year = 2025; //probar con 2016, 2018, 2028, 2035
//negacion
if (year != 2016) {
    console.log("El año no es 2016, es el año "+ year)
}

//AND
if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era postmoderna");
}

//OR
if (year == 2008 || year == 2018) {
    console.log("El año acaba en 8");
}

//ejemplo de OR y AND en la misma condicion
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año acaba en 8");
}else{
    console.log("El año no esta registrado");
}