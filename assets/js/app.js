var api={
	url: 'https://laboratoria.cuadra.co/api/v1/students/'
};

var plantilla= '<li><input type="checkbox"> **nombre** </li>'
var cargarPagina = function(){
	$.getJSON(api.url, function(response){
		response.forEach(obtenerDatos);
	});
};

var obtenerDatos = function(alumnas){
	mostrarAlumnas(alumnas.name + " " + alumnas.pLastName + " " + alumnas.mLastName);
};

var mostrarAlumnas = function(nombreAlumnas){
	var nuevaPlantilla = plantilla.replace("**nombre**", nombreAlumnas);
	$('#lista-alumnas').append(nuevaPlantilla);
	
}
$(document).ready(cargarPagina);