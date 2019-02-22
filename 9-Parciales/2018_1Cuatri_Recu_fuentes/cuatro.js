function mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioCuatro;
	var mensaje;
	var descuento;
	var total;
	var totalDescuento;
	var totalDescuentoDos;

	precioUno=prompt("Ingrese el primer precio");
	precioDos=prompt("Ingrese el segundo precio");
	precioTres=prompt("Ingrese el tercer precio");
	precioCuatro=prompt("Ingrese el cuarto precio");

	
	total=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres)+parseInt(precioCuatro);
	descuento=parseInt(descuento);
	descuento=100;

	if (total > 100) 
	{
		descuento = 90;
	}
	else
		{
			if (total < 50) 
			{
				descuento = 95;
			}
			else
				{
					descuento = 115;
				}
		}


		totalDescuento = (total) * (descuento) / 100;

	if (precioUno > precioDos && precioUno > precioTres && precioUno > precioCuatro) 
	{
		mensaje = "El precio mayor es " + precioUno + " y con el descuento sería " + totalDescuento;
	}else
		{
			if (precioDos > precioUno && precioDos > precioTres && precioDos > precioCuatro) 
			{
				mensaje = "El precio mayor es " + precioDos + " y con el descuento sería " + totalDescuento;
			}else
				{
					if (precioTres > precioCuatro && precioUno && precioDos) 
					{
						mensaje = "El precio mayor es " + precioTres + " y con el descuento sería " + totalDescuento;
					}else
					{
						if (precioCuatro > precioTres && precioUno && precioDos) 
						{
							mensaje = "El precio mayor es " + precioCuatro + " y con el descuento sería " + totalDescuento;
						}
					}
				}
		}

		alert(mensaje);
}