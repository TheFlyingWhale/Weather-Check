import React from 'react';
import { Information } from '../information/Information';
import { Forecast } from '../forecast/Forecast';

import './Location.scss';

export const Location = props => {
    const onMobile = window.screen.width < 480 ? true : false;

    return (
        <div className="locationContainer">
            <Information
                location={props.location}
                data={props.data}
                isFavorite={props.isFavorite}
                setIsFavorite={props.setIsFavorite}
                setFavorites={props.setFavorites}
                favorites={props.favorites}
                onMobile={onMobile}
            />
            <Forecast 
                data={props.data} 
                onMobile={onMobile}
            />
        </div>
    );
}