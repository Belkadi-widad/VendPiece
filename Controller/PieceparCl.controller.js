const fac=require("../models/piecesComdParClient");


// tous les pieces par client 
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
 
