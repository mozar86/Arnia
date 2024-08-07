import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.example.com',
    headers: {
        // api key, deve ir no dot.env
    }
})

export default api;