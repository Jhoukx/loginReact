import axios from './axios';

export const registerRequest = user => axios.post(`/account/register`, user);

export const loginRequest = user => axios.post(`/account/login`, user);

export const verifyToken = async() => axios.get('/account/verify');