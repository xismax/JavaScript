"use strict"

//operadores 
//es lo mismo que un operador matematico
var numero1 = 7; //sin comilla lo toma como un entero si es numero, si es texto lo interpreta como variable, y si lo pongo entre comillas interpreta que es un string o cadena de texto.
var numero2 = 12;
var operacion = numero1 * numero2; //aca podemos usar + - * / o % (saca el resto entre la division de los valores)

alert("el resultado de la operacion es: "+operacion);

//tipos de datos
//pueden ser entero, string o cadena de texto, coma flotante, booleano, array y objetos

var numero_entero = 44;
var cadena_texto = "hola que tal" //se puede usar comilla doble o simple, pero la comilla doble tiene mas importancia, mas prioridad. Puede haber una comilla simple dentro de una doble y al reves, pero no se pueden meter comillas del mismo tipo dentro de otras comillas (ej "hola "que" tal")
var verdadero_o_falso = true; //o false, son los booleanos, pueden ser 0 (false) o 1 (true) tambien 

//funciones para convertir un tipo de dato a otro
var numero_falso = "33.85";
console.log(numero_falso);//muestra 33
//si le trato de sumar un numero me lo concatena porque toma al 33 como string o cadena de texto.
console.log(numero_falso + 7);
//tengo que usar la funcion "number" para que me convierta ese string en un entero
console.log (Number(numero_falso) + 7); //tambien puedo usar parseInt (convierte a numero entero por mas de que tenga decimales, redondea para abajo), o parseFloat (convierte a numero con decimales si tiene)

//tambien puedo usar el metodo string para convertir un numero en cadena de texto por ej, para poder concatenarlo con otro tipo de texto
console.log(String(numero_entero)+4);

//para saber de que tipo de datos son mis variables utilizo typeof
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);
