const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
    },
    department:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true,
    },
    salary:{
        type:Number,
        required:true
    }
})

const employee = mongoose.model('employee',employeeSchema)
module.exports = employee