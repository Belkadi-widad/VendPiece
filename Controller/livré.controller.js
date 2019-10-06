const LC=require("../models/Livré");

// Post commande
exports.create = (req, res) => {	
	// Save to MySQL database
	let customer = req.body;
	LC.create(customer).then(result => {		
		console.log("hey4")
		// Send created customer to client
		res.json(result);
	});
};
 
// Fetch all commandes
exports.findAll = (req, res) => {
	LC.findAll().then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};
 
// Find a Customer by Id
exports.findById = (req, res) => {	
	console.log("heey from find by id ")
	LC.findById(req.params.num_bl,req.params.num_p).then(piece => {
		res.json(piece);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	let customer = req.body;
	console.log(customer); 
    let id1 = req.body.num_bl;
    let id2 = req.body.num_p;
	LC.update(customer, 
                     { where:{ num_bl:id1 , 
                               num_p:id2}
                              
                     }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a customer with id = " + id});
				   });	
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
    const id = req.params.num_bl;
    const id1= req.body.num_p;
 
	LC.destroy({
      where: { num_bl: id ,num_p : id1 
           }
            
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a customer with id = ' + id});
	});
};