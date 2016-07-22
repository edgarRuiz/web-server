var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');



app.get('/MAGA',middleware.logger,function(req,res){
	res.send('BECAUSE WE ARE GOING TO MAKE AMERICA GREAT AGAIN, WE\'RE GOING TO MAKE IT GREATER THAN EVER BEFORE!');
});

app.use(express.static(__dirname + "/public"),function(){
	console.log('server started'); 
});


app.listen(PORT);