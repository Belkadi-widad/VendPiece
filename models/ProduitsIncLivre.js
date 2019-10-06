const Sequelize = require('sequelize'); 
const db =require("../Database/db.js"); 
const com = require("../models/Commande")
const piec = require("../models/Piece")

const lc = db.sequelize.define(
'produitsincompliv', 
{

    num_ar_com :{ 
        type : Sequelize.INTEGER, 
        primaryKey : true , 
    },
    num_p :{  type : Sequelize.INTEGER, 
              primaryKey : true , 
              foreignKey: true , 
    }, 
    qte_com :{ type : Sequelize.INTEGER
               
             }, 
    qte_liv :{ type : Sequelize.INTEGER
               
        }, 

}, 
{
    timestamps : false 
}


)
/*
lc.associate = function(models) {
    lc.belongsTo(com, {foreignKey: 'fk_nump'})

  };
*/
 module.exports=lc 
 

