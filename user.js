const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
    name: {
        type: String
    },
    email : {
        type: String,
        required: true,
        unique: true,
        match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
      'Please provide a valid email address',
    ],
    },
    phone:{
        type: Number,
        required: true
    },
    role:{
        type: String,
        default: "user",
        enum:["user","admin","moderator"]
    }
})


const User  = mongoose.model('User', userSchema)

module.exports = User