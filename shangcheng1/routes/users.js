var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//zhuchejiejkou
router.post("/regist",(req,res)=>{
	var data = req.body;
	var username = data.username;
	//查询是否重名
	MongoClient.connect(url,{ useNewUrlParser: true },(err,db)=>{
		if(err) throw err;
		var dbase = db.db("zz-1810");
		var cols = dbase.collection("mydb");
		cols.find({username:username}).toArray((err,result)=>{
			if(result.length != 0){
				res.send("0");
			}else{
				cols.insertOne(data,(err,result)=>{
					res.send("1");
				})
			}
			db.close();
		})
	})
});
//denglu jiekpu
router.post("/login",(req,res)=>{
	var data = req.body;
	MongoClient.connect(url,{ useNewUrlParser: true },(err,db)=>{
		var dbase = db.db("zz-1810");
		var cols = dbase.collection("mydb");
		cols.find(data).toArray((err,result)=>{
			if(result.length==0){
				res.send("0");
			}else{
				//存session 默认存在内存里
				console.log(req.session);
				req.session.username = data.username;
				res.send("1");
			}
		})
		db.close();
	})
})



module.exports = router;
