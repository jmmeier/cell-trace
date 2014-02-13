var cells = require("../cells.json");

exports.viewProfResults = function(req, res) { 
  // controller code goes here 
   res.render('profResults', cells);
};

