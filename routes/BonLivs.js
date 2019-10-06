module.exports = function(app) {
 
    const cmds = require('../controller/BonLiv.controller.js');
 
    // Create a new Customer
    app.post('/users/bonlivs', cmds.create);
 
    // Retrieve all Customer
    app.get('/users/bonlivs', cmds.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/users/bonlivs/:IdBL', cmds.findById);
 
    // Update a Customer with Id
    app.put('/users/bonlivs', cmds.update);
 
    // Delete a Customer with Id
    app.delete('/users/bonlivs/:IdBL', cmds.delete);

}