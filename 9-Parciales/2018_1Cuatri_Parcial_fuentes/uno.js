
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Ingrese el ancho del rectangulo: ");
	largo=prompt("Ingrese el largo del rectangulo: ");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro= (ancho * 2) + (largo * 2);

	alert("Su perimetro es " + perimetro);
}
