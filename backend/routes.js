module.exports = function(app){
	var User = require('./user');

	//get
	findAllUsers = function(req,res){
		User.find(function(err,user){
			if(!err) res.send(user);
			else console.log('ERROR:'+err);
		});
	};

	//get
	findById = function(req,res){
		User.findById(req.params.id,function(err,user){
			if(!err) res.send(user);
			else console.log('ERROR:' + err);
		});
	};

	//post
	addUser = function(req,res){
		console.log('POST');
		console.log(req.body);
			//EN FORMA DE JSON
		var user = new User({
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			dni: req.body.dni,
			telefono: req.body.telefono,
			direccion: req.body.direccion,
			fecha: req.body.fecha
		});

		user.save(function(err){
			if(!err) console.log('User guardado!');
			else console.log('ERROR:'+ err);
		});

		// res.send(user);
	};
	//PUT update
	updateUser=function(req,res){
		User.findById(req.params.id,function(err,user){
			user.nombre =req.body.nombre;
			user.apellido= req.body.apellido;
			user.dni= req.body.dni;
			user.telefono= req.body.telefono;
			user.direccion= req.body.direccion;
			user.fecha= req.body.fecha;
			user.save(function(err){
				if(!err) console.log('user Actualizado');
				else console.log('ERROR:'+err);
			})
		})


	};

	//delete
	deleteUser = function(req,res){
		User.findById(req.params.id,function(err,user){
			user.remove(function(err){
				if(!err) console.log('user removido');
				else console.log('ERROR:'+ err);
			})
		})
	}



	//api routes
	app.get('/user',findAllUsers);
	app.get('/user/:id',findById);
	app.post('/user',addUser);
	app.put('/user/:id',updateUser);
	app.delete('/user/:id',deleteUser);

}