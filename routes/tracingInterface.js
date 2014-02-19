var strokes = require("../strokes.json");
var cells = require("../cells.json");

exports.viewTracingInterface = function(req, res) { 
  // controller code goes here 
   res.render('tracingInterface', cells);
};