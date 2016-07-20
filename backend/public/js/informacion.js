$(document).ready(function(){
		$.ajax({
			url:"http://localhost:8000/user",
			dataType:"json",
			success:function(obj){

				for (i in obj){

					$('.lista').append('<div class='+i+'></div>');
					var nom = obj[i].nombre;
					var ap = obj[i].apellido;
					var dni = obj[i].dni;
					var tlf = obj[i].telefono;
					var dir = obj[i].direccion;
					var fecha = obj[i].fecha;
					var ide = obj[i]._id;
					
					$('.'+i).append('<label for="nombre">Nombre:<span>'+nom+'</span></label><br>'+
									'<label for="apellido">Apellido:<span>'+ap+'</span></label><br>'+
									'<label for="dni">Dni:<span>'+dni+'</span></label><br>'+
									'<label for="telefono">Telefono:<span>'+tlf+'</span></label><br>'+
									'<label for="direccion">Direccion:<span>'+dir+'</span></label><br>'+
									'<label for="fecha">FechaInscripcion:<span>'+fecha+'</span></label><br>'+
									'<label for="idem">ID:<span>'+ide+'</span></label><hr><br>'
						);
					// $('.apellido').text(ap);
					// $('.dni').text(dni);
					// $('.telefono').text(tlf);
					// $('.direccion').text(dir);
					// $('.fecha').text(fecha);
				}


				console.log(obj.nombre + "\n"+ obj.nombre);
			}
		})	

});