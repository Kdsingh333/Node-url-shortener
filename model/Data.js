const mongoose=require('mongoose');
const dataSchema=new mongoose.Schema({
 longUrl:{
    type:String,
    required:true,
    min:6,
    max:255
 },
 shortUrl:{
    type:String,
    min:6,
    max:255
 },
 date:{
    type:Date,
    default:Date.now
 }
});

module.exports=mongoose.model('Data',dataSchema);