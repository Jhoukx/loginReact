import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import appUser from './routes/user.routes.js';
import { loadEnv } from 'vite'

const env = loadEnv('development', process.cwd(), 'VITE')
dotenv.config();

const server = express();

server.use(cors({
    origin:`http://${env.VITE_HOST}:${env.VITE_PORT_FRONTEND}`,
    credentials: true
}));
server.use(express.json());

server.use('/account', appUser);

const config = {
    hostname: env.VITE_HOST,
    port: env.VITE_PORT_BACKEND
};

server.listen(config, () => {
    console.log(`Server listening on http://${config.hostname}:${config.port}`);
})