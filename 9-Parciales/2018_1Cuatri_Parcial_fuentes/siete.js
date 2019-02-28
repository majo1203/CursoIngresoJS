function mostrar()
{
	
	var contador;
	var nota;
	var sexo;
	var cantidadAlumnos;
	var notaMasBaja;
	var totalNotas;
	var promedio;
	
	contador=0;
	cantidadAlumnos=5;

	
	while (contador<cantidadAlumnos) 
		{
			contador= contador+1;
			nota=prompt("Ingrese su nota entre 0 y 10");
			nota=parseInt(nota);
	while (nota <=0 || nota >=11)
	{
		contador= contador+1;
			nota=prompt("Error, ingrese su nota entre 0 y 10");
			nota=parseInt(nota);
		}
	sexo=prompt("Ingrese su sexo, si usted es femenino escriba f, si usted es masculino escriba m");
	while (sexo != "f" && sexo != "m")
	{
		sexo=prompt("Error, ingrese su sexo, si usted es femenino escriba f, si usted es masculino escriba m");
	}
	totalNotas=parseInt(totalNotas);

	totalNotas=(nota) + (nota) + (nota) + (nota) + (nota); 
	promedio=(totalNotas) / (cantidadAlumnos);
	mensaje=("El total de notas es " + totalNotas + " y el promedio de notas es " + promedio);
	}

	alert(mensaje);

}





