function mostrar()
{
	var precio;
	var porcentaje;
	var precioDos;
	var precioFinal;
	var elPrecioFinal;


	precio = parseInt(precio);
	porcentaje = parseInt(porcentaje);
	precioDos = parseInt(precioDos);

	precio = prompt("Ingrese el precio: ");
	porcentaje = prompt("Ingrese el porcentaje: ");

	porcentaje = precio * porcentaje / 100; 
	precioDos = parseInt(precio) - parseInt(porcentaje);

	elPrecioFinal = document.getElementById('elPrecioFinal').value = precioDos;
	elPrecioFinal = precioDos.value;

}
