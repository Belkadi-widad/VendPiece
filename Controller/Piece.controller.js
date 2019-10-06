const Piece=require("../models/Piece");

// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	let customer = req.body;
	Piece.create(customer).then(result => {		
		console.log("hey4")
		// Send created customer to client
		res.json(result);
	});
};
 
// Fetch all Customers
exports.findAll = (req, res) => {
	Piece.findAll().then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};


exports.findAllQuantStck = (req, res) => {
	Piece.findAll().then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};



// Fetch all Customers rupture de stock 

exports.findAllRS = (req, res) => {
	Piece.findAll(
		{
			where : {
				       Qte_p : 0 
			}
		}
	).then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};
 
 
// Find a Customer by Id

exports.findById = (req, res) => {	
	Piece.findById(req.params.IdPiece).then(piece => {
		res.json(piece);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	let customer = req.body;
	console.log(customer); 
	let id = req.body.IdPiece;
	Piece.update(customer, 
					 { where: {idPiece: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a customer with id = " + id});
				   });	
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.IdPiece;
   console.log(id); 
	Piece.destroy({
	  where: { IdPiece: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a customer with id = ' + id});
	});
};