const Commande=require("../models/Commande");

// Post commande
exports.create = (req, res) => {	
	// Save to MySQL database
	let customer = req.body;
	Commande.create(customer).then(result => {		
		console.log("hey4")
		// Send created customer to client
		res.json(result);
	});
};
 
// Fetch all commandes
exports.findAll = (req, res) => {
	Commande.findAll().then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};
 
// recherche de toutes les commandes non livrées

exports.findAllNL = (req, res) => {
	Commande.findAll(
		{ 
			where : {
				Etat_cmd : 'non livrée'
			}
		}
	).then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};

// Find a Customer by Id
exports.findById = (req, res) => {	
	Commande.findById(req.params.IdComd).then(piece => {
		res.json(piece);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	let customer = req.body;
	console.log(customer); 
	let id = req.body.IdComd;
	Commande.update(customer, 
					 { where: {IdComd: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a customer with id = " + id});
				   });	
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.IdComd;
   console.log(id); 
	Commande.destroy({
	  where: { IdComd: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a customer with id = ' + id});
	});
};