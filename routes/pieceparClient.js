module.exports = function(app) {
 
    const fac = require('../controller/PieceparCl.controller.js');
 
 
    // Retrieve all Customer
    app.get('/users/cls/:IdClient/stat', fac.findAll);
 
    /* Retrieve a single Customer by Id
    app.get('/users/mants/:idFact', fac.findById);*/
 
   

}