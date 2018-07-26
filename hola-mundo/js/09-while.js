'use strict'

//Bucle while

var year = 2018;

while (year <= 2051) {
    //ejecuta esto
    console.log("estamos en el año " + year)

    year++;
}

//Do while 
//ejecuta un bloque de cod mientras se cumpla una condicion.
var years = 20;

do {
    alert("Solo cuando sea diferente a 20");
    years++; //ponemos esto para que cuando llegue a 20 pare y no quede ejecutando en infinito
    console.log(years);
} while (years < 25);


//Break para dejar de ejecutar un bucle
var year = 2018;

while (year != 1991) {
    //ejecuta esto
    console.log("estamos en el año " + year)
    if (year == 2000) {
        break;        
    }
    year--;
}