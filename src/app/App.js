import React, { useState } from 'react';
import './App.scss';
import { Nav } from '../components/nav/Nav';
import { Location } from '../components/location/Location';
import { Favorites } from '../components/favorites/Favorites';

const App = () => {
    const [location, setLocation] = useState({ name: undefined, lat: undefined, log: undefined });
    const [data, setData] = useState({temperature: undefined, windSpeed: undefined, precipitation: undefined});

    const handleSelect = input => {
      console.log('handleselect');
      const lat = parseFloat(input.lat).toFixed(2);
      const lon = parseFloat(input.lon).toFixed(2);
      const inputLocation = {name: input.name, lat: lat.toString(), lon: lon.toString()};
      setLocation(inputLocation);
      retriveData(lat, lon);
    }

    const retriveData = (lat, lon) => {
      const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;
      const sitename = 'https://github.com/theflyingwhale';
      const useragent = {'User-Agent': sitename};
      fetch(url, {
        method: 'GET',
        headers: useragent
      })
      .then(response => response.json())
      .then(data => handleData(data.properties.timeseries[0].data))
      .catch(error => {
        console.log('An error occured in App.js');
        console.log(error);
      })
    }

    const handleData = object => {
      console.log(object);
      setData({temperature: object.instant.details.air_temperature, windSpeed: object.instant.details.wind_speed, precipitation: object.next_1_hours.details.precipitation_amount});
    }

    return (
        <div className="App">
            <header className="App-header">
                <Nav handleSelect={handleSelect} />
            </header>
            <main className="App-main">
                <Location location={location} data={data}/>
                <Favorites />
            </main>
        </div>
    );
}

export default App;
