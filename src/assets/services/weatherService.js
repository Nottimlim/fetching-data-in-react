// src/services/weatherService.js
const API_KEY = '0be19aa75eb741489af180713241510';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

// Asynchronous function to fetch weather data for a given city
const show = async (city) => {
    try {
        // Create a query string with the city parameter
        const queryString = `&q=${city}`;
        
        // Make the fetch request and wait for the response
        const res = await fetch(BASE_URL + queryString);
        
        // Parse the response as JSON
        const data = await res.json();
        
        // Log the data to the console
        console.log('Data:', data);
        
        // Return the data
        return data;
    } catch (err) {
        // Log any errors that occur during the fetch
        console.log(err);
    }
};

// Export the show function
export { show };