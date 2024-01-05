const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser,bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

app.get("/",()=>{

});

app.listen(4500,()=>{
    console.log("API RODANDO!")

});