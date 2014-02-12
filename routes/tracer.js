var tracers = require("../tracers.json");

exports.viewTracer = function(req, res) { 
  // controller code goes here 
   res.render('tracer', tracers);
};