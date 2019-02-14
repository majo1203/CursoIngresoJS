
function mostrar()
{
	var mascota1;
	var mascota2;
	var peso1;
	var peso2;
	var resultado

	mascota1= prompt("nombre de la mascota 1");
	mascota2= prompt("nombre de la mascota 2");
	peso1= prompt("Cual es el peso de mascota 1");
	peso2= prompt("cual es el peso de mascota 2");
	resultado= parseInt(peso1) + parseInt(peso2);
	alert("la suma de los kilos es " + resultado);

}
