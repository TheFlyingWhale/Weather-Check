import React from 'react';
import { Information } from '../information/Information';
import { Forecast } from '../forecast/Forecast';
import './Location.scss';

export const Location = () => {
    return(
        <div className="locationContainer">
            <Information />
            <Forecast />
        </div>
    );
}