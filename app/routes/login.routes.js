import { Router } from "express";

const appLogin = Router();

appLogin.get('/', (req, res) => {
    res.send({message:"All good :D"});
});

export default appLogin;