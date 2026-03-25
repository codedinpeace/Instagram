const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        minLength:6,
        unique:[true, "user with that username already exists"]
    },
    email:{
        type:String,
        unique:[true, "user with that email already exists"],
    },
    password:{
        type:String,
        minLength:6,
    }
}, {timestamps:true})

const userModel = mongoose.model("user", userSchema)
module.exports = userModel