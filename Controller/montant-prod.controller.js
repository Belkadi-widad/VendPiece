const fac=require("../models/montant_prod_facture");


// Fetch all commandes
exports.findAll = (req, res) => {
	fac.findAll({
        where : { idFact: req.params.IdFact

        }
         }
    ).then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};
 
