import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { userModel } from './db.js';
const JWT_PASSWORD = "!23123";
const app = express();
app.use(express.json());
app.post('/signup', async (req, res) => {
    // Todo: Zod validation, hash the password
    const username = req.body.username; //Getting Usernname
    const password = req.body.password; //Getting password
    //Create a username and password entry in DB
    try {
        await userModel.create({
            username: username,
            password: password
        });
        res.status(200).json({
            message: "User Signed up succesfully"
        });
    }
    catch (e) {
        res.status(411).json({
            message: "user already exists"
        });
    }
});
app.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await userModel.findOne({
        username,
        password
    });
    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD);
        res.json({
            token
        });
    }
    else {
        res.status(403).json({
            message: "Invalid credentials"
        });
    }
});
app.listen(3000);
//# sourceMappingURL=index.js.map