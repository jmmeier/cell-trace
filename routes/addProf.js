var profs = require("../profs.json");

exports.addProf = function(req, res) {    
	// Your code goes here
	var newProf =  
		{
			"name": req.query.name,
			"description": req.query.description,
			"imageURL": "http://placekitten.com/300/300"			
		};

	profs["profs"].push(newProf);
	console.log(profs);
	res.render('addProf', profs);
 };