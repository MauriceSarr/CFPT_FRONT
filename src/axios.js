import axios from 'axios';

const instance= axios.create({
    baseURL: 'http://nginx:80/api/'
});

export default instance;