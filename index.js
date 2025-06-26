const express = require('express')
const cors= require('cors')
const mongoose =  require('mongoose')
const User =  require('./user')
const Student = require('./studentModel')
const Product = require('./productModel')
const Employee = require("./employeModel")

const app = express()

mongoose.connect('mongodb+srv://us287470:g6tfbE7cYnrB4Kxg@cluster0.f7xr9yx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log(" Database Connected")
}).catch((err)=>{

    console.log('error connecting database',err)
})

app.use(express.json())
app.use(cors())

app.get('/hello',(req,res)=>{
    res.send({
        message: "This is <y first API"
    })
})


app.post('/newUser', async (req,res)=>{
    try{
        const {name, email, phone} = req.body
        const newUser = await new User({
            name: name,
            email: email,
            phone: phone
        })

        await newUser.save()

        res.send({
            message: "user created successfully"
        })


    }catch(err){

        res.send({
            err: err
        })


    }
})

app.post('/newStudent',async (req,res)=>{
    try {
        const {name,email,phone,studentId} = req.body
        const newStudent = await new Student({
            name:name,
            email:email,
            phone:phone,
            studentId:studentId
        })
        await newStudent.save()

        res.send({
            message:"Student Created Successfully"
        })

    } catch (err) {
        res.send({
            err:err
        })
    }
})

app.post('/newProduct',async (req,res)=>{
    try {
        const {name,quantity,category,price,description} = req.body
        const newProduct = await new Product({
            name:name,
            quantity:quantity,
            category:category,
            price:price,
            description:description
        }) 

        await newProduct.save()

        res.send({
            message:"Product Created Successfully"
        })

    } catch (err) {
        res.send({
            err:err
        })
    }
})

app.post('/newEmployee',async (req,res)=>{
   try {
     const {name,email,department,phoneNo,salary} = req.body
    const newEmployee = await new Employee({
        name:name,
        email:email,
        department:department,
        phoneNo:phoneNo,
        salary:salary
    })
    await newEmployee.save()
    res.send({
        message:'Employee data saved'
    })
   } catch (err) {
    res.send({
        err:err
    })
   }
})

app.listen(5000,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("server is running on the port 5000")
})
