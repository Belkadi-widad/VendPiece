const Sequelize = require('sequelize'); 
const db =require("../Database/db.js"); 

const cl = db.sequelize.define(
'client', 
{

    IdClient : {
      type : Sequelize.INTEGER, 
      primaryKey : true , 
      autoIncrement : true 
    } , 
    Email : {
        type: Sequelize.STRING 
    }, 
    NomCl: {
        type: Sequelize.STRING 
    }, 
    PrenomCl : {
        type: Sequelize.STRING 
    }, 
    AdressCl : {
        type: Sequelize.STRING 
    }, 
    Type : { 
        type: Sequelize.STRING
    },
    EtatCl : {
        type : Sequelize.STRING
    }

}, 
{
    timestamps : false 
}


)



module.exports=cl ; 
