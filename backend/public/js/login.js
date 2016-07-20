$(document).ready(function(){
	$('#btnEntrar').click(function(){
		var admin = $('input[name="admin"]').val();
		var password = $('input[name="contrasena"]').val();
		if( admin == "admin" && password =="123"){
			$('#login').prop('action','http://localhost:8000/index.html')
		}else{
			$('#login').prop('action','http://localhost:8000/error.html')
		}

	})
});