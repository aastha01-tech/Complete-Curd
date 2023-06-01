const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    mobile:Number,
    c_password:String,
});

module.exports = mongoose.model("user",userSchema);