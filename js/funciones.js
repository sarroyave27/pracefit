let a;
let b;
let aux;

a = prompt("Ingrese el primer valor de a")
b = prompt("Ingrese el primer valor de b")

if ( a < 0 || b < 0) {
	alert("No se permiten valores negativos")
}else {

	if ( a > b) {
		aux= a;
		a = b;
		b = aux;
	}
	for( i=0; i<= b; i=i+5)

		if ( i >= a) {
			console.log(i);
		}

}