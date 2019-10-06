const fac=require("../models/Relance");


// Fetch all commandes
exports.findAll = (req, res) => {
	fac.findAll().then(customers => {

	  // Send all customers to Client
	  res.json(customers);
    });
    
};
 