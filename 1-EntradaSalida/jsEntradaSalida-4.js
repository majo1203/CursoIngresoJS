/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var respuesta;

	nombre=prompt("Ingrese su nombre");
	respuesta=document.getElementById("elNombre").value = nombre;
}

