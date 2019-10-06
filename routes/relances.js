module.exports = function(app) {
 
    const fac = require('../controller/Relance.controller.js');
 
   
 
    // Retrieve all Customer
    app.get('/users/rel', fac.findAll);
 
    

}