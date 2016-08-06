var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');



app.get('/MAGA',middleware.logger,function(req,res){
	res.send('');
});

app.use(express.static(__dirname + "/public"),function(){
	console.log('server started'); 
});


app.listen(PORT);
