import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import appUser from './routes/user.routes.js';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use('/account', appUser);

const config = JSON.parse(process.env.MY_SERVER);

server.listen(config, () => {
    console.log(`Server listening on http://${config.hostname}:${config.port}`);
})