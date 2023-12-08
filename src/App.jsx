
import React from "react"; // lab 7 addition
import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'bootstrap';
import Weather from './Weather'; // lab 7 addition
import './App.css';

const key = import.meta.env.VITE_API_KEY;

function App() {

  const [location, setLocation] = useState({ display_name: 'info' });
  const [findCity, setFindCity] = useState('');
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]); // lab 7 addition

  useEffect(() => { // 17 to 20 is lab 7 addition
    console.log(location);
    if (location.lat && location.lon) {
      getWeather(location.lat, location.lon);
    }
  }, [location]);

  async function getLocation() {
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${findCity}&format=json`;
      const response = await axios.get(API);
      const results = response.data[0];
      setLocation(results);
      setError(null);
    } catch (error) {
      setError('An error occurred with the API call');
    }
  }

  async function getWeather(lat, lon) { // 34 to 40 is lab 7 addition
    console.log(lat, lon);
    try {
      const response = await axios.get(`http://localhost:3001/weather?searchQuery=${findCity}`);
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      setError('An error occurred with the API call');
    }
  }

  function onSearchChange(event) {
    setFindCity(event.target.value);
  }

  function searchLocation(event) {
    event.preventDefault();
    getLocation();
    // setFindCity({ display_name: findCity });
  }

  function generateMap(lat, lon) {
    const API2 = `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${lat},${lon}&zoom=10`;
    return API2;
  }

  return (
    <>
      <input onChange={onSearchChange} />
      <button onClick={searchLocation}>Explore City</button>
      <h2>City Name: {location.display_name}</h2>
      <h2>City Latitude: {location.lat}</h2>
      <h2>City Longitude: {location.lon}</h2>
      {/* {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      )} */}
      {location.lat && location.lon && <img src={generateMap(location.lat, location.lon)}
        alt="map"
        style={{ maxWidth: '80%' }}
      />}
      {weather.length > 0 && ( // 74 to 83 is lab 7 addition
        <>
          <Weather weather={weather} />
        </>
      )}
    </>
  )
}

export default App;
