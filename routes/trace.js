var cells = require("../cells.json");

exports.viewTrace = function(req, res) { 
  // controller code goes here 
   res.render('trace', cells);
};