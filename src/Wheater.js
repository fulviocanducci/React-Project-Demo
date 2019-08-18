import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './layout';

/**https://escoladejavascript.com/apis-externas-no-react/?fbclid=IwAR3jJd2MPiF-y1CV88GRN9xlppDpCYreiWNvp2Ln3I0LU5Bq1jSpQTE6QWc */

export default function Wheater () {
    const apiKey = 'd75b0d3d87442a5ae74622b37bde1467';
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);
    
    useEffect(() => {
        const sucessCurrentPosition = position => {
            setLocation(position.coords);
            getWeather(position.coords.latitude, position.coords.longitude);
        };
        const errorCurrentPosition = error => {
            console.log(error);
        }
        navigator.geolocation.getCurrentPosition(sucessCurrentPosition, errorCurrentPosition);        
    },[]);

    useEffect(() => {

    },[weather]);

    function getWeather(latitude, longitude) {       
        const params = {
            lat: latitude,
            lon: longitude,
            appid: apiKey,
            lang: 'pt',
            units: 'metric'
        }  
        axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params
        })        
        .then(response => {            
            setWeather(response.data);            
        })
    }

    return (
        <Container title="Wheater Local">              
            {weather ? (
                <>
                    <h3>Clima nas suas Coordenadas ({weather['weather'][0]['description']})</h3>                    
                    <ul className="list-group">
                        <li className="list-group-item"><mark>Cidade:</mark> {weather['name']}</li>
                        <li className="list-group-item"><mark>Temperatura atual:</mark> {weather['main']['temp']}°</li>
                        <li className="list-group-item"><mark>Temperatura máxima:</mark> {weather['main']['temp_max']}°</li>
                        <li className="list-group-item"><mark>Temperatura minima:</mark> {weather['main']['temp_min']}°</li>
                        <li className="list-group-item"><mark>Pressão:</mark> {weather['main']['pressure']} hpa</li>
                        <li className="list-group-item"><mark>Humidade:</mark> {weather['main']['humidity']}%</li>
                        <li className="list-group-item"><mark>Vento:</mark> {weather['wind']['deg']}° e velocidade {weather['wind']['speed']}</li>
                        <li className="list-group-item"><mark>Latitude:</mark> {location.latitude}</li>
                        <li className="list-group-item"><mark>Longitude:</mark> {location.longitude}</li>                        
                    </ul>            
                </>
            ):(
                <>
                    <div>Loading ...</div>
                </>
            )}                     
        </Container>
    )
}