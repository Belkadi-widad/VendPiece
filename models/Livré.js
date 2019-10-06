const Sequelize = require('sequelize'); 
const db =require("../Database/db.js"); 
const bl = require("../models/BonLiv"); 
const piec = require("../models/Piece"); 

const lc = db.sequelize.define(
'livre', 
{

    num_bl :{ 
        type : Sequelize.INTEGER, 
        primaryKey : true , 
    },
    num_p :{  type : Sequelize.INTEGER, 
              primaryKey : true , 
              foreignKey: true, 
    }, 
    qte_liv :{ type : Sequelize.INTEGER
               
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
 

