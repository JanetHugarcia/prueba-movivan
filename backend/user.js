var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var  user = new Schema({
	nombre: String,
	apellido: String,
	dni: String,
	telefono: Number,
	direccion: String,
  	fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User',user);

