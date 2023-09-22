import { Router } from "express";
import { collectionGen } from "../connection/connection.js";
import { createAccessToken } from "../libs/jwt.js";

const user = await collectionGen("User");
const appUser = Router();

appUser.post('/login', async (req, res) => {
    res.send('Login successful');
});
appUser.post('/register', async (req, res) => {
    try {
        //*Verify credentials

        //Verify username 
        let isUsernameInUse = await user.findOne({ username: req.body.username });
        if (isUsernameInUse) return res.status(409).json({ status: 409, message: "username is alredy in use" })
        
        //Verify email user
        let isEmailInUse = await user.findOne({ email: req.body.email });
        if (isEmailInUse) return res.status(409).json({ status: 409, message: "Email is alredy in use" })


        //insert user into User collection
        const inserUser = await user.insertOne(req.body);
        //Create JWT
        const token = await createAccessToken({ id: inserUser.insertedId })

        res.cookie('token', token)
        res.json(req.body)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


export default appUser;