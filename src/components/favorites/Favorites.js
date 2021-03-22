import React from 'react';
import { Favorite } from './Favorite';

//Icons
import sun from '../../common/images/weatherIcons/Sun.svg';
import partiallyCloudy from '../../common/images/weatherIcons/FairSun.svg';
import cloudy from '../../common/images/weatherIcons/Cloudy.svg';
import rain from '../../common/images/weatherIcons/Rain.svg';
//import thunder from '../../common/images/weatherIcons/Thunder.svg'
//import moon from '../../common/images/weatherIcons/Moon.svg'

//Css
import './Favorites.scss';
import '../../common/styles/Text.scss';

export const Favorites = () => {
    return (
        <div className="favoritesContainer">
            <div className="favorites-header">
                <h1 className="txt-large txt-w-medium black">Favorites</h1>
            </div>
            <div className="favorites">
                <Favorite location="Oslo" lalo={[59.91, 10.75]} />
                <Favorite location="Bergen" lalo={[60.39, 5.32]} />
                <Favorite location="New York City" lalo={[40.71, -74.01]} />
                <Favorite location="Beijing" lalo={[39.91, 116.40]} />
                <Favorite location="Mumbai" lalo={[19.07, 72.88]}/>
                <Favorite location="Sydney" lalo={[-33.87, 151.21]}/>
            </div>
        </div>
    );
}