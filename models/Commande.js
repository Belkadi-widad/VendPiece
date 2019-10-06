const Sequelize = require('sequelize'); 
const db =require("../Database/db.js"); 
const cl=require("../models/client");
const Com= db.sequelize.define(
'commande', 
{
IdComd : {
            type : Sequelize.INTEGER, 
            primaryKey : true , 
            autoIncrement : true 
} , 
date_ar_cmd	: {
           type : Sequelize.DATE
} ,
Etat_cmd:{
           type : Sequelize.STRING , 
//isIn: [['livrée', 'non livrée']], 
},

}
,
{
    timestamps : false 
}
)

cl.hasMany(Com); 
Com.belongsTo(cl); 
module.exports=Com; 
