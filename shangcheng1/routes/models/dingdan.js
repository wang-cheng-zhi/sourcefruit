const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const product = new Schema({
  bianhao:{
    type: String,
    required: true,
    unique:true
  },
  name: {
    type: String,
    required: true,
  },
  price:{
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  miaoshu:String,
}, {
  timestamps: true, // 在我的模型中插入时间戳.记录数据的修改和新增时间  craetedAt, updatedAt
})

const dingdan = mongoose.model('dingdan', product);

module.exports = dingdan;