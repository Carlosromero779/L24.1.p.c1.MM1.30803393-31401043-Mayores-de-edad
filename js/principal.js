/*MAYORES DE EDAD
*Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y
*reporte al final el porcentaje de personas que son mayores de edad.
*Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18),
*José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida
*presenta el siguiente formato:
*Cantidad de personas: 12
*Cantidad de personas mayor de edad: 7
*Porcentaje de personas mayor de edad: 58.33%
*/ 
import Cl_mayores from "./Cl_mayores.js"
import Cl_personas from "./Cl_personas.js"
let mayores = new Cl_mayores();
let persona1 = new Cl_personas("Luis",15);
let persona2 = new Cl_personas("Ana",19);
let persona3 = new Cl_personas("Jose",21);
let persona4 = new Cl_personas("Carmen",17);
let persona5 = new Cl_personas("Rosa",18);  
let persona6 = new Cl_personas("Jose",22);
let persona7 = new Cl_personas("Maria",17);
let persona8 = new Cl_personas("Luz",19);
let persona9 = new Cl_personas("Rafael",23);
let persona10 = new Cl_personas("Liz",15);
let persona11 = new Cl_personas("Marcos",20);
let persona12 = new Cl_personas("Leo",16);

mayores.procesar(persona1);
mayores.procesar(persona2);
mayores.procesar(persona3);
mayores.procesar(persona4);
mayores.procesar(persona5);
mayores.procesar(persona6);
mayores.procesar(persona7);
mayores.procesar(persona8);
mayores.procesar(persona9);
mayores.procesar(persona10);
mayores.procesar(persona11);
mayores.procesar(persona12);

let salida = document.getElementById("salida");
salida.innerHTML = `<br> Cantidad de personas:${mayores.cantidadPersonas()}`
salida.innerHTML += `<br> Cantidad de personas mayor de edad:${mayores.cantidadMayEdad()}`
salida.innerHTML += `<br> Porcentaje de personas mayor de edad:${mayores.porcentaje().toFixed(2)}%`