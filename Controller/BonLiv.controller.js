const BL=require("../models/BonLiv");

// Post commande
exports.create = (req, res) => {	
	// Save to MySQL database
	let customer = req.body;
	BL.create(customer).then(result => {		
		console.log("hey4")
		// Send created customer to client
		res.json(result);
	});
};
 
// Fetch all commandes
exports.findAll = (req, res) => {
	BL.findAll().then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};
 
// Find a Customer by Id
exports.findById = (req, res) => {	
	BL.findById(req.params.IdBL).then(piece => {
		res.json(piece);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	let customer = req.body;
	console.log(customer); 
	let id = req.body.IdBL;
	BL.update(customer, 
					 { where: {IdBL: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a customer with id = " + id});
				   });	
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.IdBL;
   console.log(id); 
	BL.destroy({
	  where: { IdBL: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a customer with id = ' + id});
	});
};