import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'bootstrap';
import './App.css';

const key = import.meta.env.VITE_API_KEY;

function App() {

  const [location, setLocation] = useState({ display_name: 'info' });
  const [findCity, setFindCity] = useState('');
  const [error, setError] = useState(null);

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
  function onSearchChange(event) {
    setFindCity(event.target.value);
  }
  function searchLocation(event) {
    event.preventDefault();
    getLocation();
    setFindCity({ display_name: findCity });
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
      <h2>City Latitude: {location.lat}</h2> <h2>City Longitude: {location.lon}</h2>
      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      )}
      {location.lat && location.lon && <img src={generateMap(location.lat, location.lon)}
        alt="map"
        style={{ maxWidth: '80%' }}
      />}
    </>
  )
}

export default App;
