function mostrar()
{

	var contador=0;
	var respuesta="si";
	var positivo;
	var negativo;
	var numero;
	var contadornegativo;
	var contadorpositivo;
	var cero;
	var contadorDePares;
	var acumuladorNegativo;
	var acumuladorPositivo;
	var promediopositivo;
	var promedionegativo;
	var cantidadpositivos;
	var cantidadnegativos;
	var bandera;
	var diferencia;
	var sumanegativo;
	var sumapositivo;

	acumuladorPositivo=0;
	acumuladorNegativo=0;
	contadorpositivo=0;
	contadornegativo=0;
	contadorDePares=0;
	ceros=0;
	sumanegativo=0;
	sumapositivo=0;

	while(respuesta!="no")
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero" + contador + "# : ");
		numero=parseInt(numero);
		
	if (numero<0) 
		{
			sumanegativo=sumanegativo+numero;
			acumuladorNegativo=acumuladorNegativo+numero;
			contadornegativo=contadornegativo+1;
		}
		else 
		{
			if (numero>0) 
		{
			sumapositivo=sumapositivo+numero;
			acumuladorPositivo=acumuladorPositivo+numero;
			contadorpositivo=contadorpositivo+1;
		}else
		{
			ceros=ceros+1;
		}
	}
		
	if (numero%2==0) 
	{
		contadorDePares=contadorDePares+1;
	
	}
		respuesta=prompt("=> Si , para continuar");
		acumuladorPositivo=acumuladorPositivo/contadorpositivo;
		acumuladorNegativo=acumuladorNegativo/contadornegativo

}

	alert(" " + sumanegativo + " " + acumuladorNegativo + " " + contadornegativo + " " + sum);
	


}//FIN DE LA FUNCIÓN