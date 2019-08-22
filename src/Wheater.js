import React, { useState, useEffect } from 'react';
import { Loading, Header } from './layout';
import { WeaterRequestGet } from './libraries';

export default function Wheater () {    
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);
    
    useEffect(() => {
        const sucessCurrentPosition = position => {
            setLocation(position.coords);
            loadWeather(position.coords.latitude, position.coords.longitude);
        };
        const errorCurrentPosition = error => {
            console.log(error);
        }
        navigator.geolocation.getCurrentPosition(sucessCurrentPosition, errorCurrentPosition);        
    },[]);

    useEffect(() => {

    },[weather]);

    function loadWeather(latitude, longitude) {       
        WeaterRequestGet(latitude, longitude)
            .then(response => { setWeather(response.data);})
            .catch(error => console.log(error));
    }

    return (
        <>  
            <Header title="Wheater Local"></Header>            
            {weather ? (
                <>
                    <h5>Clima nas suas Coordenadas ({weather['weather'][0]['description']})</h5>                    
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
                    <Loading type="bars" color={"#000000"}></Loading>
                </>
            )}                     
        </>
    )
}