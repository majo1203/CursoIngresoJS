function mostrar()
{

//var repetciones = prompt("ingrese el número de repeticiones");
	var numeroIngresado;
	var numeroPerfecto;
	var numeroAnterior;
	var acumulador;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroAnterior=numeroIngresado-1;numeroAnterior>0;numeroAnterior--)
	{

			if (numeroIngresado % numeroAnterior == 0) 
		{
			console.log(numeroAnterior);
			acumulador=acumulador+numeroAnterior;
		}
		
	}
	
	if (numeroIngresado==acumulador)
		{
			console.log("Es un numero perfecto");
		}
		else
		{
			console.log("No es un numero perfecto");
		}

}
//FIN DE LA FUNCIÓN