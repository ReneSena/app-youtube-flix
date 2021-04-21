import axios from 'axios';

const api = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	timeout: 1000,
});

export default api;
