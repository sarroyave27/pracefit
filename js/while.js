let nota1;
let nota2; 
let nota3;
let n;
let acumulador;
let tope;

tope = 1;
acumulador = 0;
n = prompt("Ingrese el numero de estudiantes");

while (tope <= n){
	nombre = prompt("Ingrese su nombre");
	nota1 = parseFloat(prompt("Ingrese su nota"));
	nota2 = parseFloat(prompt("Ingrese su nota"));
	nota3 = parseFloat(prompt("Ingrese su nota"));
	promedio = (nota1 + nota2 + nota3)/3;
	acumulador += promedio;
	tope = tope + 1;
}
let definitiva = acumulador / n;
console.log(acumulador);