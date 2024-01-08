const express = require("express");
const app = express();
//const bodyParser = require("body-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var DB = {
    games:[
        {
            id: 23,
            title: "call of duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 24,
            title: "CS GO",
            year: 2012,
            price: 50
        },
        {
            id: 23,
            title: "Battlefield™ 2042",
            year: 2021,
            price: 249
        }
    ]
    
    
}

app.get("/games",(req, res)=>{
    res.statusCode = 200;
    res.json(DB.games);

});

app.get("/game/:id",(req,res)=>{
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
       var id = parseInt(req.params.id);
      var game = DB.games.find(g => g.id == id);

       if(game != undefined){
        res.statusCode = 200;
        res.json(game);

       }else{
        res.sendStatus(404);
       }
    }
});
app.listen(45678,()=>{
    console.log("API RODANDO!")

});