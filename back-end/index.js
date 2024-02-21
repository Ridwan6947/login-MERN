const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const Login = require('./models/login');

const app = express();
app.use(cors(
    {
        origin : ["https://login-mern-api-lake.vercel.app"],
        methods : [GET , POST],
        credentials : true

    }
));
app.use(express.json());

const mongoDBURL = 'mongodb+srv://root:root@cluster0.eyccxmh.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoDBURL)
    .then(() =>{
        console.log("DataBase Connected");
        app.listen(5000 , ()=>{
            console.log("server is running");
        })
    })
    .catch((err)=>{
        console.log(err);
    });


    app.post('/' , async(req , res) =>{
        res.json("Hello");
    });
    app.post('/submit' , async(req , res) =>{
        const {email,password} = req.body;
        Login.findOne({email : email})
        .then(user =>{
            if(user){
                if(user.password === password){
                    res.json("Login Successfull");
                    return res.status(200).send({message :'Logged in Successfully'})
                }
                else{
                    res.json("Login failed , Check password again")
                }
            }else{
                res.json("No record found , create a new account")
            }
        })
    });

    app.post('/newUser' , async(req , res) =>{
        try{
            const newUser = new Login({
                email:req.body.email,
                password:req.body.password
            });
            const result = await newUser.save();
            res.sendStatus(201);
        }catch(error){
            console.log(error);
            res.sendStatus(500);
        }
    })
