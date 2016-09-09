var express = require('express');
var app = express();
var routes = require('./module/routes');
app.use(express.static(__dirname + '/public'));

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
	var led = new five.Led.RGB({
		  pins: {
		    red: 2,
		    green: 3,
		    blue: 4
		  },
		  isAnode: true
	});
	led.color("#FFFFFF");
	console.log( led.color() );
	var servo = new five.Servo({
		  pin: 7,
		  startAt: 50
		});
	// Set horn to 90 degrees
	servo.to(90).on("move:complete", function() {
		console.log("90");		
		servo.to(180).on("move:complete", function() {
			console.log("180");
				servo.to(0).on("move:complete", function() {
					console.log("0");
					
				});
		});
		
	});
});

app.get('/', function(req, res) { 
    res.render('accueil.ejs', {});
})
.use(function(req, res, next){
    res.redirect('/');
})

.listen(8080);