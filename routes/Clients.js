module.exports = function(app) {
 
    const cl = require('../controller/Client.controller.js');
 
    // Create a new Customer
    app.post('/users/cls', cl.create);
 
    // Retrieve all Customer
    app.get('/users/cls', cl.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/users/cls/:IdClient', cl.findById);
 
    // Update a Customer with Id
    app.put('/users/cls', cl.update);
 
    // Delete a Customer with Id
    app.delete('/users/cls/:IdClient', cl.delete);

}