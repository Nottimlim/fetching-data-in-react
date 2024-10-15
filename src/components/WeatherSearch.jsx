// src/components/WeatherSearch.jsx
import { useState } from 'react';

const WeatherSearch = ({ fetchData }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(city);
        setCity('');
    };

    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={handleSubmit} className="search-form">
                <label htmlFor="city">Enter a city:</label>
                <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </section>
    );
};

export default WeatherSearch;
