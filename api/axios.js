import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://127.0.0.1:4017',
    withCredentials:true
});

export default instance

