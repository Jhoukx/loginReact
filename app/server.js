import express from 'express';
import dotenv from 'dotenv';
import appLogin from './routes/login.routes.js';
dotenv.config();

const server = express();

server.use(express.json());

server.use('/login', appLogin);

const config = JSON.parse(process.env.MY_SERVER);

server.listen(config, () => {
    console.log(`Server listening on http://${config.hostname}:${config.port}`);
})