module.exports = function(app) {
 
    const cmds = require('../controller/Commande.controller.js');
 
    // Create a new Customer
    app.post('/users/cmds', cmds.create);
 
    // Retrieve all Customer
    app.get('/users/cmds', cmds.findAll);

    // Retrieve all Customer
    app.get('/users/cmds/NL', cmds.findAllNL);
 
    // Retrieve a single Customer by Id
    app.get('/users/cmds/:IdComd', cmds.findById);
 
    // Update a Customer with Id
    app.put('/users/cmds', cmds.update);
 
    // Delete a Customer with Id
    app.delete('/users/cmds/:IdComd', cmds.delete);

}