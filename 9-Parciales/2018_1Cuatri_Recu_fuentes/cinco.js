function mostrar()
{
	var paquete;
	var formaDePago;
	var tarjetaVisa;
	var paypal;
	var mercadoPago;
	var efectivo;
	var otroMedio;
	var soloDesayunos;
	var todoIncluido;
	var precio;
	var descuento;

	paquete = prompt("Que paquete desea adquirir ");
	precio = prompt("Cual es el monto de su habitacion");
	formaDePago = prompt("Cual es su forma de pago");
	precio = parseInt(precio);

	descuento = 100;
	
	switch (true) {
		case "tarjetaVisa":
		case "mercadoPago":
		descuento = precio * 10 / 100;
		break;
		case "paypal":
		descuento = precio * 15 / 100;
		switch (true)
		{
		case "todoIncluido":
		descuento = precio * 25 / 100;
		break;
		break;
		case "efectivo":
		descuento = precio * 20 / 100;
		break;
		case "otroMedio":
		descuento = precio * 5 / 100;
		break;

	}

	switch (true){
		case "todoIncluido && paypal":
		descuento = precio * 25 / 100;
		break;
		case "soloDesayunos && efectivo":
		descuento = precio * 30 / 100;
		break;
		case "todoIncluido && efectivo":
		descuento =  precio * 35 / 100;
		break;

	}

	total = precio - descuento;

	alert("Su precio con descuento a pagar es " + total);
}
