import express from 'express';
import dotenv from 'dotenv';
import appLogin from './routes/login.routes.js';
import appRegister from './routes/register.routes.js';
import cors from 'cors';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use('/login', appLogin);
server.use('/register', appRegister);

const config = JSON.parse(process.env.MY_SERVER);

server.listen(config, () => {
    console.log(`Server listening on http://${config.hostname}:${config.port}`);
})