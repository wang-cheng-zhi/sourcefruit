const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const product = new Schema({
  name: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  sfz: {
    type: Number,
    required: true,
  }, 
  coverImg: String, 
  xueli:{
    type: String,
  },
  rzsj:String,
  gongzuo: {
    type: String,
    required: true,
  },

}, {
  timestamps: true, // 在我的模型中插入时间戳.记录数据的修改和新增时间  craetedAt, updatedAt
})

const personal = mongoose.model('personal', product);

module.exports = personal;