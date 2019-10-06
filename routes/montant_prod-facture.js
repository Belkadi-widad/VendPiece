module.exports = function(app) {
 
    const fac = require('../controller/montant-prod.controller.js');
 
 
    // Retrieve all Customer
    app.get('/users/mants/:IdFact', fac.findAll);
 
    /* Retrieve a single Customer by Id
    app.get('/users/mants/:idFact', fac.findById);*/
 
   

}