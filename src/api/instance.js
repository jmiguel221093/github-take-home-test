import axios from 'axios';

const API_BASE_URL = "https://api.github.com/";

const api = axios.create({
    baseURL: API_BASE_URL
});

api.defaults.headers.common['Accept'] = "application/vnd.github.v3+json";

export default api;