const Sequelize = require('sequelize'); 
const db =require("../Database/db.js"); 
const Fac = require("../models/Facture"); 

const bl = db.sequelize.define(
    'bonlivraison', 
    {
        IdBL: { type : Sequelize.INTEGER, 
                primaryKey : true , 
                autoIncrement : true}, 
        DateBL : { type: Sequelize.DATE }, 
        NomPrep : {  type : Sequelize.STRING}, 
        Poids_Col : {type : Sequelize.INTEGER} , 
        Nbr_colis : {type : Sequelize.INTEGER}, 
        NumArCom : {type : Sequelize.INTEGER } 	
        
    }, 
    {
        timestamps : false 
    }


)

//bl.hasOne(Fac,{foreignKey: 'fk_num_fact'}); 

module.exports=bl ; 

