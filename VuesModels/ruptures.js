const Sequelize = require('sequelize'); 


const rpt =db.sequelize.define(
'ruptures_stock', 
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
    }

}, 
{
    timestamps : false 
}


)


module.exports=rpt; 