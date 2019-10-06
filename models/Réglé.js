const Sequelize = require('sequelize'); 
const db =require("../Database/db.js"); 
const piec = require("../models/Facture"); 

const lc = db.sequelize.define(
'regle', 
{

    date :{ 
        type : Sequelize.DATE, 
        primaryKey : true , 
    },
    num_fact :{  type : Sequelize.INTEGER, 
              primaryKey : true , 
              foreignKey: true, 
    }, 
    montant_reg :{ type : Sequelize.DOUBLE
               
             }, 

}, 
{
    timestamps : false 
}


)

/*lc.associate = function(models) {
    lc.belongsTo(bl, {foreignKey: 'Code_prod'})

  };*/

 module.exports=lc 
 

