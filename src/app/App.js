import React, { useState, useEffect } from 'react';
import './App.scss';
import { Nav } from '../components/nav/Nav';
import { Location } from '../components/location/Location';
import { Favorites } from '../components/favorites/Favorites';
import { getLocationData, fetchTimezone } from '../common/scripts/apiCalls';
import { dataModel } from '../common/scripts/dataDigester';
import { DevTools } from '../components/devTools/DevTools';

const App = () => {
    const [location, setLocation] = useState({ name: 'Herøy', lalo: [65.98, 12.29] });
    const [timezone, setTimezone] = useState({});
    const [data, setData] = useState(dataModel);
    const showDevTools = false;

    const handleSelect = input => {
        console.log('handleSelect triggered');
        const lat = parseFloat(input.lat).toFixed(2);
        const lon = parseFloat(input.lon).toFixed(2);
        const inputLocation = { name: input.name, lalo: [lat.toString(), lon.toString()] };
        fetchTimezone(lat, lon, setTimezone);
        setLocation(inputLocation);
    }

    useEffect(() => {
        getLocationData(location.lalo[0], location.lalo[1], setData);
    }, [location]);

    return (
        <div className="App">
            <header className="App-header">
                <Nav handleSelect={handleSelect} />
            </header>
            <main className="App-main">
                <Location location={location} data={data} />
                <Favorites />
            </main>
            {showDevTools ? <DevTools data={data} location={location}/> : null}
        </div>
    );
}

export default App;
