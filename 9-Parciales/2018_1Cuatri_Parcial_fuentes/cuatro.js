function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultadoFinal;
	var resultadoSuma;

	

	numeroUno=prompt("Ingrese el primer numero: ");
	numeroDos=prompt("Ingrese el segundo numero: ");
	resultadoFinal= parseInt(numeroUno) + parseInt(numeroDos);

	if (numeroUno == numeroDos) 
	{
		resultadoFinal=" " +  numeroUno + " y " + "" + numeroDos;
	}else
		{
			if (numeroUno > numeroDos) 
			{
				resultadoFinal=numeroUno - numeroDos;
			}else
			{
				if (numeroDos > numeroUno) 
				{
					resultadoSuma= parseInt(numeroDos) + parseInt(numeroUno);
					resultadoFinal=resultadoSuma;
				}
			}
		}

	if (resultadoFinal > 10) 
	{
		 resultadoFinal="La suma es: " + resultadoSuma + " y supero el 10";
	}

	alert(resultadoFinal);

}
