const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    technology:String,
    contact:Number,
    mobile:Number,
    gender:String,
    branch:String,
    image:String
});

module.exports = mongoose.model("students",studentSchema);