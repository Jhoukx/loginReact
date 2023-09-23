import axios from 'axios';

const API = "http://127.0.0.1:4017"

export const registerRequest = user => axios.post(`${API}/account/register`, user);

export const loginRequest = user => axios.post(`${API}/account/login`,user);