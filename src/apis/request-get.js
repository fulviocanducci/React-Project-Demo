import axios from 'axios';

export default function requestGet(url, config = null) {    
    return axios.get(url, config);
}