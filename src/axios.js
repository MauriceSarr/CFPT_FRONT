import axios from 'axios';

const instance= axios.create({
    baseURL: 'http://18.212.87.32:8000/api/'
});

axios.interceptors.request.use(function (config) {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    config.headers['X-CSRF-TOKEN'] = csrfToken;
    return config;
});

export default instance;