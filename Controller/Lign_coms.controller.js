const LC=require("../models/Lign_com");
const Sequelize =require("sequelize"); 
const Op = Sequelize.Op
const bl =require("../models/BonLiv"); 
const LC1 = require("../models/ProduitsIncLivre")

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
	LC.findAll({
		where :{ num_ar_com : req.params.IdComd, 
			//qte_com : { [Op.gt]: LC.qte_liv
		   }}
	).then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};

exports.findBL = (req, res) => {
	console.log("dkhal l find BL")	
	bl.findById(req.params.IdBL).then(piece => {
		res.json(piece);
	})
};

exports.findAllByIdComd = (req, res) => {
	LC1.findAll(
		{ 
			where :{ num_ar_com : req.params.num_ar_com, 
					 //qte_com : { [Op.gt]: LC.qte_liv
					}
		}
	).then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};

// Find a Customer by Id
exports.findById = (req, res) => {	
	LC.findById(req.params.num_ar_com,req.params.num_p).then(piece => {
		res.json(piece);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	let customer = req.body;
	console.log(customer); 
    let id1 = req.body.num_ar_com;
    let id2 = req.body.num_p;
	LC.update(customer, 
                     { where:{ num_ar_com:id1 , 
                              num_p:id2}
                              
                     }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a customer with id = " + id});
				   });	
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
    const id = req.params.num_ar_com;
    const id1= req.body.num_p;
 
	LC.destroy({
      where: { num_ar_com: id ,num_p : id1 
           }
            
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a customer with id = ' + id});
	});
};