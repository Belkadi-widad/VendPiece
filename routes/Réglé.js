module.exports = function(app) {
 
    const LC = require('../controller/Réglé.controller.js');
 
    // Create a new Customer
    app.post('/users/reg', LC.create);
 
    // Retrieve all Customer
    app.get('/users/reg', LC.findAll);

    // toutes les piéces non livré 
    //app.get('/users/reg/piecesNL/:num_ar_com', LC.findAllByIdComd);
    
    //les factures   incompletement  réglé 
    app.get('/users/reg/FactureNL', LC.findAllFacs);

    app.get('/users/reg/Mois/:IdFact', LC.findAllFacMois);

     //la    incompletement  réglé 
     app.get('/users/reg/FactureNL/:IdFact', LC.findFacs);

    // Retrieve a single Customer by Id
    app.get('/users/reg/:date/:IdFact', LC.findById);
 
    // Update a Customer with Id
    app.put('/users/reg',LC.update);
 
    // Delete a Customer with Id
    app.delete('/users/reg/:date/:IdFact', LC.delete);


}