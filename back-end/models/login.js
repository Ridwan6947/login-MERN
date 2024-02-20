const mongoose = require('mongoose')

const loginScheme = new mongoose.Schema({
    email:String,
    password:String
})

const Login = mongoose.model("login" , loginScheme)
module.exports = Login