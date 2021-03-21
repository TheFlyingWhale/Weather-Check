import React, { useState, useEffect } from 'react';
import './App.scss';
import { Nav } from '../components/nav/Nav';
import { Location } from '../components/location/Location';
import { Favorites } from '../components/favorites/Favorites';
import { getLocationData } from '../common/scripts/apiCalls';
import { dataModel } from '../common/scripts/dataDigester';

const App = () => {
    const [location, setLocation] = useState({name: 'Oslo', lalo: [59.91, 10.75]});
    const [data, setData] = useState(dataModel);

    const handleSelect = input => {
      const lat = parseFloat(input.lat).toFixed(2);
      const lon = parseFloat(input.lon).toFixed(2);
      const inputLocation = {name: input.name, lalo: [lat.toString(), lon.toString()]};
      setLocation(inputLocation);
    }

    const getData = () => {
      console.log(data);
    }

    const getLocation = () => {
        console.log(location);
    }

    useEffect(() => {
        getLocationData(location.lalo[0], location.lalo[1], setData);
    },[location]);

    return (
        <div className="App">
            <header className="App-header">
                <Nav handleSelect={handleSelect} />
                <button onClick={getData}>getData</button>
                <button onClick={getLocation}>getLocation</button>
            </header>
            <main className="App-main">
                <Location location={location} data={data}/>
                <Favorites />
            </main>
        </div>
    );
}

export default App;
