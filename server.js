var express=require("express"); 
var mysql=require("mysql"); 
var cors = require("cors"); 
var BodyParser= require("body-parser"); 
var users= require ("./routes/Users"); 
var app=express(); 
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions))

var port = process.env.PORT || 3000 ; 

app.use(BodyParser.json()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); 
app.use( 
    BodyParser.urlencoded({extended: false })
) 


app.use("/users", users); 
require('./routes/Pieces.js')(app);
require('./routes/Commandes.js')(app);
require('./routes/Clients.js')(app);
require('./routes/Ligne_coms.js')(app);
require("./routes/BonLivs")(app);
require("./routes/Factures")(app);
require("./routes/livrés")(app);
require("./routes/montant_prod-facture")(app);
require("./routes/Réglé")(app);
require("./routes/relances")(app);
require("./routes/pieceparClient")(app);
require("./routes/pieceLivParClient")(app);

app.listen (port, () =>{
    console.log(" le Serveur est entrain d'etre excuté  dans le port  " + port); 
}); 
