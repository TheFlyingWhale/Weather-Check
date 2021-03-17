import React from 'react';
import './Favorites.scss';

import '../../common/styles/Colors.scss';
import '../../common/styles/Text.scss';

export const Favorite = props => {
    return(
        <div className="favorite">
            <img className="favoriteWeatherIcon" alt="icon" src={props.icon}/>
            <h2 className="txt-large txt-w-normal black location">{props.location}</h2>
            <p className="txt-small txt-w-normal gray">26 °C</p>
        </div>
    );
}