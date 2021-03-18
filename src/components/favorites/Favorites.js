import React from 'react';
import { Favorite } from './Favorite';

//Icons
import sun from '../../common/images/weatherIcons/Sun.svg';
import partiallyCloudy from '../../common/images/weatherIcons/PartiallyCloudy.svg';
import cloudy from '../../common/images/weatherIcons/Cloudy.svg';
import rain from '../../common/images/weatherIcons/Rain.svg';
//import thunder from '../../common/images/weatherIcons/Thunder.svg'
//import moon from '../../common/images/weatherIcons/Moon.svg'

//Css
import './Favorites.scss';
import '../../common/styles/Text.scss';

export const Favorites = () => {
    return(
        <div className="favoritesContainer">
            <div className="favorites-header">
                <h1 className="txt-large txt-w-medium black">Favorites</h1>
            </div>
            <div className="favorites">
                <Favorite location="Oslo" icon={sun} />
                <Favorite location="Stavanger" icon={cloudy} />
                <Favorite location="Trondheim" icon={partiallyCloudy} />
                <Favorite location="Bergen" icon={rain} />
            </div>
        </div>
    );
}