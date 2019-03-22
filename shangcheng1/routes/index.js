var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: req.session.username });
});

router.get('/index', function(req, res, next) {
  res.render('index', { name: req.session.username });
});
router.get('/login', function(req, res, next) {
  res.render('login', {name: req.session.username });
});
router.get("/relogin",(req,res)=>{
	req.session.destroy(function(err){
		if(!err){
			res.redirect("/login");
		}
	})
});
router.get('/regist', function(req, res, next) {
  res.render('regist', {name: req.session.username });
});


router.get('/error', function(req, res, next) {
  res.render('error', { name: req.session.username });
});
router.get('/mysystem', function(req, res, next) {
  res.render('myststem', { name: req.session.username });
});
router.get('/news', function(req, res, next) {
  res.render('news', { name: req.session.username});
});
router.get('/personalxinxi', function(req, res, next) {
  res.render('personalxinxi', { name: req.session.username });
});



//暂时不用的路由跳转
router.get('/msystem', function(req, res, next) {
  res.render('msystem', { name: req.session.username });
});


router.get('/shopping', function(req, res, next) {
  res.render('shopping', { name: req.session.username });
});


router.get('/ac-information', function(req, res, next) {
  res.render('ac-information', { name: req.session.username });
});

router.get('/chengyuan', function(req, res, next) {
  res.render('chengyuan', { name: req.session.username });
});


module.exports = router;
