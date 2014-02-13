var tracers = require("../tracers.json");

exports.addTracer = function(req, res) {    
	// Your code goes here
	var newTracer =  
		{
			"name": req.query.name,
			"description": req.query.description,
			"imageURL": "http://placekitten.com/300/300"			
		};

	tracers["tracers"].push(newTracer);
	console.log(tracers);
	res.render('addTracer', tracers);
 };