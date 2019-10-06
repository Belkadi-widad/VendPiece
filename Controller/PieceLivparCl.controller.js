const fac=require("../models/PieceLivreParClient");


// tous les pieces livrés avec leurs quantité global  par client 
exports.findAll = (req, res) => {
	fac.findAll({
        where : { IdClient: req.params.IdClient

        }
         }
    ).then(customers => {

	  // Send all customers to Client
	  res.json(customers);
	});
};
 
