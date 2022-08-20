const express = require("express");
const persistence = require("../models/persistence");


const router = express.Router();

router.get("/list",function(req,res){
    res.redirect("/");
});
router.get("/",function(req,res){
    res.render("list.ejs",{kategorieFeld: persistence.kategorieFeld});
});
router.get("/tutorials",function(req,res){
    let feldt = persistence.getTutorialsZuKategorie(req.query.category);
    
    res.render("tutorials.ejs",{tutorialsFeld: feldt,
        getDauerInStundenUndMinuten: persistence.getDauerInStundenUndMinuten });
  
});

router.get("/tutorial",function(req,res){
    let tutorial = persistence.getTutorialByName(req.query.name);
    if(tutorial !== undefined){
            res.render("tutorial.ejs", {tutorial: tutorial,
                getDauerInStundenUndMinuten: persistence.getDauerInStundenUndMinuten });
        }
    else{
        res.status(404).render("fehler.ejs");
    }
});

router.get("/form",function(req,res){
    res.render("form.ejs");
});
router.post("/",function(req,res){
    let t;
    if((req.body.type) === "text"){
         t = new persistence.Tutorial(req.body.name, req.body.language,req.body.description,req.body.duration,req.body.date,req.body.content,"","/img/test.png",req.body.name);
        persistence.tutorialsFled.push(t);
       
    }
    else if((req.body.type) ==="video"){
         t = new persistence.Tutorial(req.body.name, req.body.language,req.body.description,req.body.duration,req.body.date,"",req.body.content,"/img/test.png",req.body.name);
        persistence.tutorialsFled.push(t);
        
    }
    let kat = req.body.categories.split(",");
    
    kat.forEach(element => {
        persistence.kategorieFeld.forEach(key => {
            if(element === key.name){
                t.fuegeKategorieHinzu(key);
            }
        });
    });

    
    res.redirect("/");

});
router.use("*",function(req,res){
    res.status(404).render("fehler.ejs");
});

module.exports = router;