import { Router } from "express";
import { collectionGen } from "../connection/connection.js";

const user = await collectionGen("users");
const appUser = Router();

appUser.post('/login', async (req, res) => {
    res.send('Login successful');
});
appUser.post('/register', async (req, res) => {
    res.send('Register');
});


export default appUser;