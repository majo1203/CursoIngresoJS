/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var precio;
	var resultado;
	var descuento;

	resultado=parseInt(resultado);
	descuento=parseInt(descuento);

	precio=document.getElementById("importe").value;
	
	precio=parseInt(precio)
	descuento= precio * 25 / 100;
	resultado=precio-descuento;

	resultado=document.getElementById("resultado").value = resultado;
}
