const Sequelize = require('sequelize'); 
const db =require("../Database/db.js"); 
const bl = require("../models/BonLiv"); 

const fact = db.sequelize.define(
    'montant_prod_facture', 
    { 
       

          idFact : {
          type : Sequelize.INTEGER, 
          primaryKey: true , 
          
        } ,
        IdPiece : {
            type : Sequelize.INTEGER, 
            
          } , 
          Designation : {
              type: Sequelize.STRING 
          }, 
          Montant: {
              type : Sequelize.DOUBLE
          }
    }, 
    {
        timestamps : false 
    }


)



module.exports=fact ; 
