import { Router } from "express";
import { collectionGen } from "../connection/connection.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const user = await collectionGen("User");
const appUser = Router();

appUser.post('/login', async (req, res) => {
    res.send('Login successful');
});
appUser.post('/register', async (req, res) => {
    try {
        let response = await user.findOne({ email: req.body.email });
        if (response) return res.status(409).json({ status: 409, message: "Email is not available" })
        const inserUser = await user.insertOne(req.body);
        jwt.sign(
            {
                id:inserUser.insertedId
            },
            process.env.JWT_PASSWORD,
            {
                expiresIn:"30m"
            },
            (err, token) => {
                if (err) throw new Error
                res.json({token})
            }
        )
    } catch (error) {
        console.log(error)
        res.send()
    }
});


export default appUser;