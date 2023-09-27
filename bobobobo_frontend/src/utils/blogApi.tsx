import axios from 'axios';

const baseUrl = 'http://124.222.146.116:8881';

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

export const getMoment = (token: string) => axios({
    method: 'get',
    url: '/moment',
    headers: {
        Authorization: `Bearer ${token}`,
    }
});

export const postMoment = (topic: string, content: string, table:object, amount: string, token: string) => axios({
    method: 'post',
    url: '/moment',
    data: {
        topic,
        content,
        table : {
            amount,
        },
    },
    headers: {
        Authorization: `Bearer ${token}`,
    }
});