const express = require("express"); 
const users= express.Router(); 
const cors = require("cors"); 
const jwt = require("jsonwebtoken"); 
const bcrypt= require("bcrypt"); 

const User = require("../models/User"); 
users.use(cors()); 
process.env.SECRET_KEY ='secret' ; 

//REGISTER 
users.post('/register', (req,res)=>{
    console.log("tal tchou ")
    const userData={
        username : req.body.username, 
        password : req.body.password, 
        Email : req.body.Email, 
        service: req.body.service , 
 
    }
User.findOne( 
     {
         where: { 
             Email : req.body.Email 
         }
     }
 )
 .then(client => {
        if(!client) 
        {
            const hash =bcrypt.hashSync(userData.password,10)
            userData.password =hash 
            User.create(userData)
                 .then(client=>{
                        let token =jwt.sign(client.dataValues,process.env.SECRET_KEY , {expiresIn :1440})
                        res.json({token : token })
                        })
                 .catch(err =>{
                        res.send('error :'+ err)
                        } )           
         }
        else {
             res.json({ error : 'Cet utilisateur existe déja '})
            }

        })
.catch(err=> {
     res.send('error :' + err)
              })

})
//login 
users.post('/login', (req,res)=>{

User.findOne( 
     {
         where: { 
             Email : req.body.Email 
         }
     }
 )
 .then(client => {
        if(bcrypt.compareSync(req.body.password,client.password))
        {
           let token =jwt.sign(client.dataValues,process.env.SECRET_KEY , {expiresIn :1440})
                        res.json({token : token })
        }
        else {
             res.send('Cet utilisateur n existe pas'); 
            }

        })

 .catch(err=> {
     res.send('error :' + err)
              })

})

//profile 
users.get('/profile' , (req,res) =>{
var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)

User.findOne( 
    {
        where: { 
            id: decoded.id  
        }
    }
)

.then( client=>{
    if(client){ 
        res.json(client); 
    }else {
        res.send('Cet utilisateur n existe pas ! '); 
    }
})
.catch( err=> { 
 res.send('error : '+ err); 
})

})

module.exports= users; 
