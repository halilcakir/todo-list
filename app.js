const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

const items = [];
const works= [];

app.get("/", function (req, res){
     
  let day = date.getDay();

      res.render("list", {listTitle:day, newitem:items});
    });

    app.post("/", function(req,res){
      
      let item = req.body.newItem;
      if(req.body.list === "Works"){

        works.push(item);
        res.redirect("/work");

      }else{
        items.push(item);
        res.redirect("/");
      }
      
      console.log(req.body);
      
     

    });

    app.get("/work", function(req, res ){
      res.render("list", {listTitle:"Works", newitem:works});

    })

    app.get("/about", function(req, res){

      res.render("about");
    });



      app.listen(3000, function () {
        console.log("Server is up !");
      });
    