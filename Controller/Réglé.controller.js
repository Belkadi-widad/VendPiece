const fac=require("../models/Réglé");
const facs=require("../models/facturesNR");

// Post commande
exports.create = (req, res) => {	
	// Save to MySQL database
	let customer = req.body;
	fac.create(customer).then(result => {		
		console.log("hey4")
		// Send created customer to client
		res.json(result);
	});
};
 
// Fetch all commandes
exports.findAll = (req, res) => {
	fac.findAll().then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};
//Reherche des reglements d'une facture 
exports.findAllFacMois = (req, res) => {
	fac.findAll(
		{where : {
                 num_fact : req.params.IdFact
		    }
	}
	).then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};

// find all factures  non réglé 
exports.findAllFacs = (req, res) => {
	facs.findAll().then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};

// Find a Customer by Id
exports.findById = (req, res) => {	
	fac.findById(req.params.idFact).then(piece => {
		res.json(piece);
	})
};
 
//trouver la facture incompletement réglé 
exports.findFacs=(req, res) => {	
	facs.findByPk(req.params.idFact).then(piece => {
		res.json(piece);
	})
};

// Update a Customer
exports.update = (req, res) => {
	let customer = req.body;
	console.log(customer); 
    let id = req.body.date;
    let id2= req.body.num_fact; 
fac.update(customer, 
                     { where: {date: id,
                               num_fact: id2, 
                     } }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a facture  with id = " + id});
				   });	
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.idFact;
   console.log(id); 
fac.destroy({
	  where: { idFact: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a customer with id = ' + id});
	});
};