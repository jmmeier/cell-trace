var cells = require("../cells.json");

exports.addCell = function(req, res) {    
	// Your code goes here
	var newCell =  
		{
			"untraced": req.query.untraced,
			"traced": req.query.traced,		
		};

	cells["cells"].push(newCell);
	console.log(cells);
	res.render('addCell', cells);
 };