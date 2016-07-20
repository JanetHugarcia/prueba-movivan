$(document).ready(function(){


	$('#btnLimpiar').click(function(){
		$('input').val("");
	})

	$('#btnBuscar').click(function(){
		
		var id = $('#nameuser').val();
		alert(id);
		
		$.ajax({
			url:"http://localhost:8000/user/"+id,
			dataType:"json",
			success:function(obj){
				var nom = obj.nombre;
				var ap = obj.apellido;
				var dni = obj.dni;
				var tlf = obj.telefono;
				var dir = obj.direccion;
				var fecha = obj.fecha;
				var ide = obj._id;
				
				$('.nombre').text(nom);
				$('.surname').text(ap);
				$('.dni').text(dni);
				$('.telefono').text(tlf);
				$('.direccion').text(dir);
				$('.fecha').text(fecha);
				$('.idem').text(ide);

				console.log(obj.nombre + "\n"+ obj.nombre);
			}
		})
		
	});




});