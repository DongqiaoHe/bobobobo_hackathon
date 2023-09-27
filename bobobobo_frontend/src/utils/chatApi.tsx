
import axios from 'axios';

const baseUrl = 'http://localhost:8881/api';

axios.defaults.baseURL = baseUrl;

axios.interceptors.request.use(
    async (config) => {
        if (localStorage.getItem('token')) {
            config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

axios.interceptors.response.use(
    (res: any) => res,
    (error: any) => {
        const status = error.response ? error.response.status : null;
        if (status === 406) {
            localStorage.clear();
            window.location.replace('/');
        }
        if (status === 403) {
            window.location.replace('/forbidden');
        }
        return Promise.reject(error);
    },
);

export const askgpt = (message:string) => axios.post(`/gpt/ask`, message);