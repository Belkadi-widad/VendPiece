const Sequelize = require('sequelize'); 
const db =require("../Database/db.js"); 

module.exports=db.sequelize.define(
'user', 
{

    id : {
      type : Sequelize.INTEGER, 
      primaryKey : true , 
      autoIncrement : true 
    } , 
    username : {
        type: Sequelize.STRING 
    }, 
    password : {
        type: Sequelize.STRING 
    }, 
    Email : {
        type: Sequelize.STRING 
    }, 
    service : {
        type: Sequelize.STRING 
    }
    

}, 
{
    timestamps : false 
}


)