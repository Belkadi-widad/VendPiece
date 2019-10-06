module.exports = function(app) {
 
    const pieces = require('../controller/Piece.controller.js');
 
    // Create a new Customer
    app.post('/users/pieces', pieces.create);
 
    // Retrieve all Customer
    app.get('/users/pieces', pieces.findAll);

    // Retrieve all Customer
    app.get('/users/rupture', pieces.findAllRS);
 
    // Retrieve a single Customer by Id
    app.get('/users/pieces/:IdPiece', pieces.findById);
 
    // Update a Customer with Id
    app.put('/users/pieces', pieces.update);
 
    // Delete a Customer with Id
    app.delete('/users/pieces/:IdPiece', pieces.delete);
}