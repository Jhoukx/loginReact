import { Router } from "express";

const appUser = Router();

appUser.post('/login', async (req, res) => {
    res.send('Login successful');
});
appUser.post('/register', async (req, res) => {
    res.send('Register');
});


export default appUser;