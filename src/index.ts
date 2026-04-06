import express from 'express'
import jwt from 'jsonwebtoken'
import { userModel } from './db.js';
import {JWT_PASSWORD} from './config.js'
import cors from 'cors';

const app = express();
app.use(express.json());

//connecting backend to frontend using cors
app.use(cors({
  origin: 'https://thehootly.com',  // your frontend domain
  credentials: true
}));
//Tesitng if backend is live or not
app.get('/', (req, res) => {
  res.send('Backend Hootly is live!');
});

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


app.post('/signin', async (req, res) => {

    const username = req.body.username
    const password = req.body.password

     const existingUser = await userModel.findOne({
        username,
        password
    })

    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)
        
        res.json({
            token
        })
    } else{
        res.status(403).json({
            message: "Invalid credentials"
        })
    }

})

//Render doesn't workl hardcoded on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
