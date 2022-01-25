import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://react-cdp-api.herokuapp.com/'
});
export default instance;