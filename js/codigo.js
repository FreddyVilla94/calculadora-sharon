var a;
var b;
var respuesta;

function calcu() {

	var pantalla = document.getElementById("pantalla");
	var reset = document.getElementById("reset");
	var espacio = document.getElementById("espacio");
	var porcentaje = document.getElementById("porcentaje");
	var divicion = document.getElementById("divicion");
	var multiplicar = document.getElementById("multiplicar");
	var resta = document.getElementById("resta");
	var suma = document.getElementById("suma");
	var igual = document.getElementById("igual");
	var decimal = document.getElementById("decimal");
	var uno = document.getElementById("uno");
	var dos = document.getElementById("dos");
	var tres = document.getElementById("tres");
	var cuatro = document.getElementById("cuatro");
	var cinco = document.getElementById("cinco");
	var seis = document.getElementById("seis");
	var siete = document.getElementById("siete");
	var ocho = document.getElementById("ocho");
	var nueve = document.getElementById("nueve");
	var cero = document.getElementById("cero");

	uno.onclick = function (e) { pantalla.value = pantalla.value + "1"; }

	dos.onclick = function (e) { pantalla.value = pantalla.value + "2"; }

	tres.onclick = function (e) { pantalla.value = pantalla.value + "3"; }

	cuatro.onclick = function (e) { pantalla.value = pantalla.value + "4"; }

	cinco.onclick = function (e) { pantalla.value = pantalla.value + "5"; }

	seis.onclick = function (e) { pantalla.value = pantalla.value + "6"; }

	siete.onclick = function (e) { pantalla.value = pantalla.value + "7"; }

	ocho.onclick = function (e) { pantalla.value = pantalla.value + "8"; }

	nueve.onclick = function (e) { pantalla.value = pantalla.value + "9"; }

	cero.onclick = function (e) { pantalla.value = pantalla.value + "0"; }

	reset.onclick = function (e) { resetear(); }

	suma.onclick = function (e) {
		a = pantalla.value;
		respuesta = "+";
		limpiar();
	}

	resta.onclick = function (e) {
		a = pantalla.value;
		respuesta = "-";
		limpiar();
	}

	multiplicar.onclick = function (e) {
		a = pantalla.value;
		respuesta = "*";
		limpiar();
	}

	divicion.onclick = function (e) {
		a = pantalla.value;
		respuesta = "/";
		limpiar();
	}

	igual.onclick = function (e) {
		b = pantalla.value;
		// respuesta = "+";
		// console.log(a);
		// console.log(b);
		// console.log(respuesta);
		resolver();
	}

}

function limpiar() { 
	pantalla.value = ""; 
}

function resetear() {
	pantalla.value = "";
	a = 0;
	b = 0;
	respuesta = "";
}

function resolver() {

	var res = 0;
	switch (respuesta) {

		case "+":
			res = parseFloat(a) + parseFloat(b);
			break;

		case "-":
			res = parseFloat(a) - parseFloat(b);
			break;

		case "*":
			res = parseFloat(a) * parseFloat(b);
			break;

		case "/":
			res = parseFloat(a) / parseFloat(b);
			break;
	}

	resetear();
	pantalla.value = res;
}