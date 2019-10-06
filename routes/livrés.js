module.exports = function(app) {
 
    const LC = require('../controller/livré.controller.js');
 
    // Create a new Customer
    app.post('/users/li', LC.create);
 
    // Retrieve all Customer
    app.get('/users/li', LC.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/users/li/:num_bl/:num_p', LC.findById);
 
    // Update a Customer with Id
    app.put('/users/li',LC.update);
 
    // Delete a Customer with Id
    app.delete('/users/li/:IdBL/:IdPiece', LC.delete);


}