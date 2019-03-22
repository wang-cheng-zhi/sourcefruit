const mongoose = require('mongoose');
const Type = require('./type');
const Shop = require("./shop");
const Personal = require("./personal");
const Dingdan = require("./dingdan")
// const Product = require('./product');
// const Message = require('./message');
// 连接数据库
mongoose.connect('mongodb://localhost:27017/mydb',{'useNewUrlParser':true});

module.exports = {
  Type,
  Shop,
  Personal,
  Dingdan
}
