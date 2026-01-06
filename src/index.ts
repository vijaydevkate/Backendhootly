import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { userModel } from './db.js';

const app = express();
app.use(express.json());

app.post('/signup', (req, res) => {
// Todo: Zod validation, hash the password

const username = req.body.username; //Getting Usernname
const password = req.body.password; //Getting password

//Create a username and password entry in DB
  userModel.create({
    username: username,
    password: password
})

res.json({
    message: "User Signed up succesfully"
})


})

app.post('/signin', (req, res) => {
 
})


app.listen(3000);
