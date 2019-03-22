var express = require('express');
var router = express.Router();
var { Type,Shop } = require("./models");

router.get('/shopping-fenlei', function(req, res, next) {
  Type.find({}).then((data)=>{
    res.render("shopping-fenlei",{name: req.session.username,data:data});
    //console.log(data)
  }).catch( (err) =>{
    //console.log(err)
  })
 
});
router.delete("/del1",function (req,res,next) { 
  //console.log(req.body.name)
  Type.findOneAndRemove({name:req.body.name,number:req.body.number}).then((data)=>{
    res.json({
      code:0,
      msg:"ok"
    })
  }).catch((err)=>{
    res.json({
      code:1,
      msg:"fail"
    })
  })
  
});

router.get("/xiugai1",function(req,res){
  Type.findOne({bianhao:req.query.id}).then((data)=>{
    res.render("xiugai1",{name: req.session.username,data:data})
  }).catch((err)=>{
    console.log(err)
  })
  
});

router.put("/xiugai1",function(req,res,next){
  var data = {
    bianhao : req.body.bianhao,
    name : req.body.name,
    number : req.body.sl
    };
  Type.findOneAndUpdate({bianhao:req.body.ID},data).then((data)=>{
    res.json({
      code:0,
      msg:"ok"
    })
  }).catch((err)=>{
    res.json({
      code:1,
      msg:"fail"
    })
  })
});
router.post("/type",(req,res)=>{
  // console.log(req.body)
  const t = new Type()
  t.name = req.body.sp;
  t.number = req.body.sl;
  t.bianhao = req.body.bianhao;
  t.save().then((data)=>{
    res.json({
      code:0,
      msg:"ok"
    })
  }).catch((err)=>{
    res.json({
      code:1,
      msg:"fail"
    })
  })
  
});


router.get('/shopping-add', function(req, res, next) {
  res.render('shopping-add', { name: req.session.username });
});


router.get('/xiugai', function(req, res) {
  Shop.findOne({bianhao:req.query.id}).then((data)=>{
    res.render('xiugai', { name: req.session.username,data:data});
  }).catch((err)=>{
    //console.log(err)
  })
  
});

router.post("/xiugai",(req,res)=>{
  var data = {
    bianhao : req.body.bianhao,
    name : req.body.name,
    miaoshu : req.body.miaoshu,
    price : req.body.price,
    number : req.body.sl
    };
  Shop.findOneAndUpdate({bianhao:req.body.ID},data).then((data)=>{
    res.json({
      code:0,
      msg:"ok"
    })
  }).catch((err)=>{
    res.json({
      code:1,
      msg:"fail"
    })
  })
  // console.log(req.body)
  
});


router.post("/add",(req,res)=>{
  //console.log(req.body)
  const add = new Shop()
  add.bianhao = req.body.bianhao;
  add.name = req.body.name;
  add.miaoshu = req.body.miaoshu;
  add.price = req.body.price;
  add.number = req.body.sl;
  add.save().then((data)=>{
    res.json({
      code:0,
      msg:"ok"
    })
  }).catch((data)=>{
    res.json({
      code:1,
      msg:"fail"
    })
  })
});

router.get('/shopping-list', function(req, res, next) {
  Shop.find({}).then((data)=>{
      //console.log(data)
      res.render('shopping-list',{ name: req.session.username,data:data});
  }).catch((err)=>{
    //console.log(err)
  })
  
});
router.delete("/shopping-list",function(req, res, next) {
 //console.log(req.body.name) 
 Shop.findOneAndRemove({bianhao:req.body.bianhao,name:req.body.name}).then((data)=>{
    res.json({
      code:0,
      msg:"ok"
    })
 }).catch((err)=>{
  res.json({
    code:1,
    msg:"fail"
  })
 })


})



module.exports = router;