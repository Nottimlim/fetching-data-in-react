// src/App.jsx
import { useState } from 'react';
import './App.css'
import WeatherSearch from './components/WeatherSearch';
import WeatherDetails from './components/WeatherDetails';
import * as weatherService from './assets/services/weatherService';

const App = () => {
    const [weather, setWeather] = useState({});

    const fetchData = async (city) => {
        const data = await weatherService.show(city);
        const newWeatherState = {
            location: data.location.name,
            temperature: data.current.temp_f,
            condition: data.current.condition.text,
        };
        setWeather(newWeatherState);
    };

    console.log('State:', weather);

    return (
        <main>
            <h1>Weather API</h1>
            <WeatherSearch fetchData={fetchData} />
            <WeatherDetails weather={weather} />
        </main>
    );
};

export default App;
