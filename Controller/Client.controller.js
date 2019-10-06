const Client=require("../models/Client");

// Post commande
exports.create = (req, res) => {	
	// Save to MySQL database
	let customer = req.body;
	Client.create(customer).then(result => {		
		console.log("hey4")
		// Send created customer to client
		res.json(result);
	});
};
 
// Fetch all commandes
exports.findAll = (req, res) => {
	Client.findAll().then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};
 
// Find a Customer by Id
exports.findById = (req, res) => {	
	Client.findById(req.params.IdClient).then(piece => {
		res.json(piece);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	let customer = req.body;
	console.log(customer); 
	let id = req.body.IdClient;
	Client.update(customer, 
					 { where: {IdClient: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a customer with id = " + id});
				   });	
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.IdClient;
   console.log(id); 
	Client.destroy({
	  where: { IdClient: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a customer with id = ' + id});
	});
};