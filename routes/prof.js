var profs = require("../profs.json");

exports.viewProf = function(req, res) { 
  // controller code goes here 
   res.render('prof', profs);
};