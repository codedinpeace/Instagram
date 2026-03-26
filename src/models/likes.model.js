const mongoose = require("mongoose")

const likeSchema = mongoose.Schema({
    user:{
        type:String,
        required:true,
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    }
})

likeSchema.index({user:1, post:1}, {unique:true})

const likeModel = mongoose.model("likes", likeSchema)
module.exports = likeModel