const Sequelize = require('sequelize'); 
const db =require("../Database/db.js"); 
const bl = require("../models/BonLiv"); 

const fact = db.sequelize.define(
    'facturenonréglés', 
    {
          idFact : {
          type : Sequelize.INTEGER, 
          primaryKey : true , 
          autoIncrement : true 
        } , 
        dateEd : {
            type: Sequelize.DATE 
        }, 
        dateEch : {
            type: Sequelize.DATE 
        }, 
        prix_tot: {
            type: Sequelize.DOUBLE
        }, 
        num_BL: {
                 type: Sequelize.INTEGER ,
                 
        }, 
        date : { 
                 type : Sequelize.DATE
        }, 
        montant_reg : {
            
            type: Sequelize.INTEGER
        }
    
    }, 
    {
        timestamps : false 
    }


)



module.exports=fact ; 
