import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { userModel } from './db.js';

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
// Todo: Zod validation, hash the password

const username = req.body.username; //Getting Usernname
const password = req.body.password; //Getting password

//Create a username and password entry in DB
try{
  await userModel.create({
    username: username,
    password: password
})

res.status(200).json({
    message: "User Signed up succesfully"
})
}catch(e){
    res.status(411).json({
        message:"user already exists"
    })
}
})

app.post('/signin', (req, res) => {
 
 
})


app.listen(3000);
