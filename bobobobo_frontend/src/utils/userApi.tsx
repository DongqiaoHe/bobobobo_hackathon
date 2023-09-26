import axios from 'axios';

const baseUrl = 'http://localhost:8080';

axios.interceptors.request.use(
    async (config) => {
        if (localStorage.getItem('accessToken')) {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
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

export const signup = (username:string, Password:string) => axios.post(`${baseUrl}/user/register`, {username, Password});