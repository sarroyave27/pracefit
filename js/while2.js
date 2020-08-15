let a;
let b;
let aux;
let tope = 0;


a = prompt("Ingrese el primer valor de a")
b = prompt("Ingrese el primer valor de b")

if ( a < 0 || b < 0) {
	alert("No se permiten valores negativos")
}else {

	if ( a > b) {
		aux= a;
		a = b;
		b = aux;
	
	while(tope <= b){

		if ( tope >= a){
			console.log(tope);
		}
	
	tope += 5;

    }

	}	

}