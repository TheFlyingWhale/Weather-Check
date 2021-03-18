import React, { useState } from 'react';
import './App.scss';
import { Nav } from '../components/nav/Nav';
import { Location } from '../components/location/Location';
import { Favorites } from '../components/favorites/Favorites';

const App = () => {
    const [location, setLocation] = useState({ name: undefined, lat: undefined, lng: undefined });

    const handleSelect = input => {
      console.log(input);
      setLocation(input);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Nav handleSelect={handleSelect} />
            </header>
            <main className="App-main">
                <Location location={location} />
                <Favorites />
            </main>
        </div>
    );
}

export default App;
