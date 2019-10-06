const Sequelize = require('sequelize'); 
const db =require("../Database/db.js"); 
const lc=require("../models/Lign_com")

const piece =db.sequelize.define(
'piéce', 
{

    IdPiece : {
      type : Sequelize.INTEGER, 
      primaryKey : true , 
      autoIncrement : true 
    } , 
    DesignP : {
        type: Sequelize.STRING 
    }, 
    Poids : {
        type: Sequelize.INTEGER
    }, 
    Prix_p: {
        type: Sequelize.DOUBLE
    }, 
    Qte_p: {
        type: Sequelize.INTEGER 
    }, 

}, 
{
    timestamps : false 
}


)
piece.associate = function(models) {
    // Shop hasMany Coffees
    piece.hasMany(lc);
};

module.exports=piece; 