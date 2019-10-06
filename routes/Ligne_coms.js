module.exports = function(app) {
 
    const LC = require('../controller/Lign_coms.controller.js');
 
    // Create a new Customer
    app.post('/users/lc', LC.create);
 
    // Retrieve all Customer
    app.get('/users/cmds/:IdComd/lc', LC.findAll);

    // toutes les piéces non livré 
    app.get('/users/lc/piecesNL/:num_ar_com', LC.findAllByIdComd);
    
    //le bon de livraison  
    app.get('/users/lc/piecesNL/:IdBL', LC.findBL);

    // Retrieve a single Customer by Id
    app.get('/users/lc/:IdComd/:IdPiece', LC.findById);
 
    // Update a Customer with Id
    app.put('/users/lc',LC.update);
 
    // Delete a Customer with Id
    app.delete('/users/lc/:IdComd/:IdPiece', LC.delete);


}