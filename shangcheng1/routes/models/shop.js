const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const product = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }, 
  coverImg: String, 
  bianhao:{
    type: String,
    required: true,
    unique:true
  },
  miaoshu:String,
}, {
  timestamps: true, // 在我的模型中插入时间戳.记录数据的修改和新增时间  craetedAt, updatedAt
})

const shop = mongoose.model('shop', product);

module.exports = shop;