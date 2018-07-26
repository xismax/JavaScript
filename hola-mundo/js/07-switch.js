'use strict'

//condicional switch
var edad = 74;
var imprime = "";


switch (edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        break;
    case 25:
        imprime = "Ya eres un adulto";
        break;
    case 40:
        imprime = "Crisis de los 40";
        break;
    case 75:
        imprime = "Ya sos un anciano";
        break;
    default:
        imprime = "Tu edad es neutra";
        break;
}
console.log(imprime);

//ejemplo con un booleano para ver rangos de edades.
switch (true) {
    case (edad == 18):
        imprime = "Acabas de cumplir la mayoria de edad";
        break;
    case (edad == 25):
        imprime = "Ya eres un adulto";
        break;
    case (edad == 40):
        imprime = "Crisis de los 40";
        break;
    case (edad > 40 && edad < 75):
        imprime = "Te estas volviendo viejo";
        break;
    case (edad == 75):
        imprime = "Ya sos un anciano";
        break;
    default:
        imprime = "Tu edad es neutra";
        break;
}
console.log(imprime);