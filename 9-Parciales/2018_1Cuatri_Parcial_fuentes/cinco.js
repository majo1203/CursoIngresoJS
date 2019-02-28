function mostrar()
{
	var planeta;
	var tierra;
	var mercurio;
	var venus;
	var marte;
	var jupiter;
	var saturno;
	var urano;
	var neptuno;
	var mensaje;

	planeta=prompt("Ingrese un planeta del sistema solar: ");

	switch(planeta) 
	{
		case "tierra":
		mensaje="Acá vivimos";
		break;
		case "mercurio":
		case "venus":
		mensaje="Acá hace mas calor";
		break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		mensaje="Acá hace mas frio";
		break;
		default:
		mensaje="Ingrese un sistema del planeta solar valido y en minúscula";
		break;
	}
	alert(mensaje);
}
