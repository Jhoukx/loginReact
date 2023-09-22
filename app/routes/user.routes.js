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
        let response = await user.findOne({ email: req.body.email });
        //Verify that is a new user
        if (response) return res.status(409).json({ status: 409, message: "Email is not available" })
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