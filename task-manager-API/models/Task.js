const { default: mongoose } = require("mongoose");
const monogoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type:String,
    required:[true,'Empty Strings are not allowed'],
    trim:true,
    maxLength:[20,'Cannot Enter more than 20 character']

  },
  completed:{
    type:Boolean,
    default:false,
  }
});
module.exports=mongoose.model('Tasks',taskSchema)