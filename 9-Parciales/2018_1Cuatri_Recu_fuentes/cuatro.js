function mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioCuatro;
	var percioMayor;
	var mensaje;
	var descuento;
	var resultado;
	var resultadoFinal;

	precioUno = prompt("Ingrese el primer monto");
	precioDos = prompt("Ingrese el segundo monto");
	precioTres = prompt("Ingrese el tercer monto");
	precioCuatro = prompt("Ingrese el cuarto monto");

	var precioUno = parseInt(precioUno);
	var precioDos = parseInt(precioDos);
	var precioTres = parseInt(precioTres);
	var precioCuatro = parseInt(precioCuatro);

	descuento = 100;
	resultado=precioUno+precioDos+precioTres+precioCuatro;

		if (resultado > 100) {
		descuento = 90;
		} else {
		if (resultado < 50) {
			descuento = 115;
	} else {
		descuento = 95;
	}
    }

		resultadoFinal = resultado * descuento / 100;


	if (precioUno > precioDos && precioUno > precioCuatro && precioUno > precioTres) 
	{
		mensaje = ("El precio mas alto es " + precioUno + " su total es " + resultadoFinal);
	} else {if (precioDos > precioTres && precioDos > precioCuatro) 
		{
		mensaje = ("El precio mas alto es " + precioDos + " su total es " + resultadoFinal);
	}else{ if (precioTres > precioCuatro) {
		mensaje = ("El precio mas alto es " + precioTres + " su total es " + resultadoFinal);
	} else{ if (precioCuatro > precioTres && precioUno > precioDos) {
		mensaje = ("El precio mas alto es " + precioCuatro + " su total es " + resultadoFinal);
	}
} 


	alert(mensaje);
}
