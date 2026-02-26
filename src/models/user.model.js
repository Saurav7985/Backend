const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    Number : Number,
    message : String,

})

const userModel = mongoose.model('quary',userSchema)

module.exports = userModel