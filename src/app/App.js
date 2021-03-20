import React, { useState } from 'react';
import './App.scss';
import { Nav } from '../components/nav/Nav';
import { Location } from '../components/location/Location';
import { Favorites } from '../components/favorites/Favorites';
import { getLocationData } from '../common/scripts/apiCalls';
import { dataModel } from '../common/scripts/dataDigester';

const App = () => {
    const [location, setLocation] = useState({ name: undefined, lat: undefined, log: undefined });
    const [data, setData] = useState(dataModel);

    const handleSelect = input => {
      const lat = parseFloat(input.lat).toFixed(2);
      const lon = parseFloat(input.lon).toFixed(2);
      const inputLocation = {name: input.name, lat: lat.toString(), lon: lon.toString()};
      setLocation(inputLocation);
      getLocationData(lat, lon, setData);
    }

    const getData = () => {
      console.log(data);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Nav handleSelect={handleSelect} />
                <button onClick={getData}>getData</button>
            </header>
            <main className="App-main">
                <Location location={location} data={data}/>
                <Favorites />
            </main>
        </div>
    );
}

export default App;
