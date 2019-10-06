module.exports = function(app) {
 
    const fac = require('../controller/Facture.controller.js');
 
    // Create a new Customer
    app.post('/users/facs', fac.create);
 
    // Retrieve all Customer
    app.get('/users/facs', fac.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/users/facs/:idFact', fac.findById);
 
    // Update a Customer with Id
    app.put('/users/facs', fac.update);
 
    // Delete a Customer with Id
    app.delete('/users/facs/:idFact', fac.delete);

}