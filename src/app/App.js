import React, { useState, useEffect } from 'react';
import './App.scss';
import { Nav } from '../components/nav/Nav';
import { Location } from '../components/location/Location';
import { Favorites } from '../components/favorites/Favorites';
import { getLocationData } from '../common/scripts/apiCalls';
import { dataModel } from '../common/scripts/dataDigester';
import { DevTools } from '../components/devTools/DevTools';

const App = () => {
    const [location, setLocation] = useState({ name: 'Oslo', lalo: [59.91, 10.75] });
    const [data, setData] = useState(dataModel);
    const [favorites, setFavorites] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const showDevTools = false;

    const handleSelect = input => {
        //console.log('handleSelect triggered');
        const lat = parseFloat(input.lat).toFixed(2);
        const lon = parseFloat(input.lon).toFixed(2);
        const inputLocation = { name: input.name, lalo: [lat.toString(), lon.toString()] };
        //fetchTimezone(lat, lon, setTimezone);
        setLocation(inputLocation);
    }

    //Takes care of fetching location data
    useEffect(() => {
        getLocationData(location.lalo[0], location.lalo[1], setData);
    }, [location]);

    //Checks if current location is in favorites
    useEffect(() => {
        //console.log(favorites.some(element => element.name === location.name));
        if (favorites.some(element => element.name === location.name)) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [favorites, location]);

    //Gets favorites from localStorage and sets favorites state equal to localStorage
    useEffect(() => {
        if (localStorage.getItem('favorites') !== null) {
            setFavorites(JSON.parse(localStorage.getItem('favorites')));
        }
    }, []);

    //Sets favorites in localStorage when favorites state changes
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <div className="App">
            <header className="App-header">
                <Nav handleSelect={handleSelect} />
            </header>
            <main className="App-main">
                <Location
                    location={location}
                    data={data}
                    isFavorite={isFavorite}
                    setIsFavorite={setIsFavorite}
                    setFavorites={setFavorites}
                    favorites={favorites}
                />

                <Favorites
                    favorites={favorites}
                    setLocation={setLocation}
                />

            </main>
            {showDevTools ? <DevTools data={data} location={location} /> : null}
        </div>
    );
}

export default App;
