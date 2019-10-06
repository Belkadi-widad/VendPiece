const Sequelize = require('sequelize'); 
const db =require("../Database/db.js"); 
const com = require("./Commande")
const piec = require("./Piece")

const lc = db.sequelize.define(
'piecescomdparclient', 
 
{

    IdClient :{ 
        type : Sequelize.INTEGER, 
        primaryKey : true , 
    },
    IdPiece :{  type : Sequelize.INTEGER, 
             
    }, 
    DesignP: {
        type: Sequelize.STRING 
    }, 
    NbrPiecesCom:  {type : Sequelize.INTEGER},
    
 
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
 module.exports=lc; 
 

