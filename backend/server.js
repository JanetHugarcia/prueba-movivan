var express = require('express');
var mongoose = require('mongoose');
var app = express();
var methodOverride = require('method-override');
var bodyParser  = require("body-parser");
var router = express.Router();


	app.use(bodyParser.urlencoded({ extended: true }));  
	app.use(bodyParser.json());  
	app.use(methodOverride());
	app.use(router);


mongoose.connect('mongodb://localhost/user',function(err,res){
	if(err) console.log('ERROR: Conectando a la BD: '+err);
	else console.log('Conexion a la BD realizada');
});

//que escuche una peticion get, se carga login en local
app.get('/',function(req,res){
  res.sendFile( __dirname + '/public/login.html');
});
app.use(express.static(__dirname+'/public/'));

require('./routes')(app);

app.listen(8000);
console.log('Servidor express escuchando en el puerto 8000');
