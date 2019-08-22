import axios from 'axios';
export default function requestPost(url, data, config = null) {
    return axios.post(url, data, config);
}