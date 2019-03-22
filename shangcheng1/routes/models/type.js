const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    
  },
  bianhao:{
    type: String,
    required: true,
    unique:true
  } , 
}, {
  timestamps: true, // 在我的模型中插入时间戳.记录数据的修改和新增时间  craetedAt, updatedAt
})

const type = mongoose.model('type', productTypeSchema);

module.exports = type;