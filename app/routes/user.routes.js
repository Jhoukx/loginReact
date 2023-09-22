import { Router } from "express";
import { collectionGen } from "../connection/connection.js";

const user = await collectionGen("User");
const appUser = Router();

appUser.post('/login', async (req, res) => {
    res.send('Login successful');
});
appUser.post('/register', async (req, res) => {
    try {
        let response = await user.findOne({ email: req.body.email });
        if (response) return res.status(404).json({ status: 404, message: "Email is not available" })
        const inserUser = await user.insertOne(req.body);
        res.json({status:200,message:"User created successfully"})
    } catch (error) {
        console.log(error)
        res.send()
    }
});


export default appUser;