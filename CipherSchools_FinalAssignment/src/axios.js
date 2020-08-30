import axios from 'axios';

const instance  = axios.create({
    baseURL:"https://kushwahavikash.firebaseio.com/"
})

export default instance;