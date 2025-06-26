const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true,
        match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
      'Please provide a valid email address',
    ]},
    phone:{
        type:Number,
        required: true,
    },
    studentId:{
        type:String,
        required:true
    }
})

const student = mongoose.model('student',studentSchema)

module.exports = student