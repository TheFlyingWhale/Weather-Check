import React from 'react';
import { Information } from '../information/Information';
import { Forecast } from '../forecast/Forecast';
import { Favorites } from '../favorites/Favorites'
import './Location.scss';

export const Location = () => {
    return (
        <div>
            <div className="locationContainer">
                <Information />
                <Forecast />
            </div>
            <div className="favoritesContainer">
                <Favorites />
            </div>
        </div>
    );
}