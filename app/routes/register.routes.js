import { Router } from "express";

const appRegister = Router();

appRegister.post('/', (req, res) => {
    res.send('Registering...');
})

export default appRegister;