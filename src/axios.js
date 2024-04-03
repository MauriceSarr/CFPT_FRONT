import axios from 'axios';

const instance= axios.create({
    baseURL: 'http://18.212.87.32:8000/api/'
});

export default instance;