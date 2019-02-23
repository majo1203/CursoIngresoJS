function mostrar()
{

	var contador=0;
	var numeromayor;
	var numeroMenor;
	numeromayor=-999;
	numeroMenor=999;
	var respuesta='si';
	

	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero" + contador + "# : ");
		numero=parseInt(numero);
		
		if (contador==0) 
		{
			maximo= numero;
			minimo= numero;
		}else
		{
			if (numero>numeromayor) 
			{
			numeromayor=numero;
			}
			if (numero<numeroMenor) 
			{
			numeroMenor=numero;
			}
		}
		

		respuesta=prompt("=>Si , para continuar");
	}  

document.getElementById("maximo").value=numeromayor;
document.getElementById("minimo").value=numeroMenor;

}//FIN DE LA FUNCIÓN