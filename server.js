var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentification : function(req,res,next){
		console.log('Private route hit');
		next();
	},
	logger : function(req,res,next){
		console.log('Request: ' + req.method +' ' + new Date().toString());
		next();
	}
}



app.get('/MAGA',middleware.logger,function(req,res){
	res.send('BECAUSE WE ARE GOING TO MAKE AMERICA GREAT AGAIN, WE\'RE GOING TO MAKE IT GREATER THAN EVER BEFORE!');
});

app.use(express.static(__dirname + "/public"),function(){
	console.log('server started'); 
});


app.listen(PORT);