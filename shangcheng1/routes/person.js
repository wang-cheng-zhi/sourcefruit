var express = require('express');
var router = express.Router();
var { Personal,Dingdan } = require("./models");


router.get('/regularmembers', function(req, res, next) {
  res.render('regularmembers', { name: req.session.username });
});

router.get('/shopping-dingdan', function(req, res, next) {
  Dingdan.find({}).then((data)=>{
    console.log(data)
    res.render('shopping-dingdan', { name: req.session.username,data:data })
  }).catch((err)=>{
    console.log(err)
  })
  
});

router.post("/adddingdan",function(req,res,next){
  const add = new Dingdan()
  add.bianhao = req.body.bianhao,
  add.name = req.body.name,
  add.price = req.body.price,
  add.number = req.body.number,
  add.miaoshu = req.body.miaoshu,
  add.save().then((data)=>{
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

  //console.log(req.body)
  //res.end("1")
});

router.delete("/adddelete",function(req,res,next){
  Dingdan.findOneAndRemove({bianhao:req.body.bianhao,name:req.body.name}).then((data)=>{
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
  // console.log(req.body.bianhao)
  // res.end("0")
});

router.get("/dingdanxiugai",function (req,res) {
  Dingdan.findOne({bianhao:req.query.id}).then((data)=>{
    res.render("dingdanxiugai",{name: req.session.username,data:data})
  }).catch((err)=>{
    console.log(err)
  })
});

router.put("/xiugai",(req,res)=>{
  var data = {
    bianhao : req.body.bianhao,
    name : req.body.name,
    miaoshu : req.body.miaoshu,
    price : req.body.price,
    number : req.body.number
    };
  Dingdan.findOneAndUpdate({bianhao:req.body.ID},data).then((data)=>{
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
})



module.exports = router;