/*.) Elaborar un programa que calcule la nota 
promedio de un grupo de N estudiantes, cada 
estudiante tiene un nombre y 3 notas.
N=es un numero conocido de estudiantes */

let nombre;
let nota1;
let nota2; 
let nota3;
let n;
let acumulador;

acumulador = 0;
n = prompt("Ingrese el numero de estudiantes");

for( i=1; i<=n; i=i+1){
	nombre = prompt("Ingrese su nombre");
	nota1 = parseFloat(prompt("Ingrese su nota"));
	nota2 = parseFloat(prompt("Ingrese su nota"));
	nota3 = parseFloat(prompt("Ingrese su nota"));
	promedio = (nota1 + nota2 + nota3)/3;
	acumulador += promedio;
}
let definitiva = acumulador / n;
console.log(acumulador);