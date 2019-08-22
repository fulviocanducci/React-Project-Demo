import { RequestGet } from '../apis/index'

export default function WeaterRequestGet (latitude, longitude) {
    const apiKey = 'd75b0d3d87442a5ae74622b37bde1467';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather/';
    const params = {
        lat: latitude,
        lon: longitude,
        appid: apiKey,
        lang: 'pt',
        units: 'metric'
    };    
    return RequestGet(apiUrl, {params});
}