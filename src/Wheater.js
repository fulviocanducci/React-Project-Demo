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
                    <div className="title has-text-centered">
                        <h1>Clima: ({weather['weather'][0]['description']})</h1>                    
                    </div>
                    <ul className="list">
                        <li className="list-item">Cidade: {weather['name']}</li>
                        <li className="list-item">Temperatura atual: {weather['main']['temp']}°</li>
                        <li className="list-item">Temperatura máxima: {weather['main']['temp_max']}°</li>
                        <li className="list-item">Temperatura minima: {weather['main']['temp_min']}°</li>
                        <li className="list-item">Pressão: {weather['main']['pressure']} hpa</li>
                        <li className="list-item">Humidade: {weather['main']['humidity']}%</li>
                        <li className="list-item">Vento: {weather['wind']['deg']}° e velocidade {weather['wind']['speed']}</li>
                        <li className="list-item">Latitude: {location.latitude}</li>
                        <li className="list-item">Longitude: {location.longitude}</li>                        
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