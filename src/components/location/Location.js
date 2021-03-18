import React from 'react';
import { Information } from '../information/Information';
import { Forecast } from '../forecast/Forecast';
import './Location.scss';

export const Location = props => {

    return (
        <div>
            <div className="locationContainer">
                <Information location={props.location}/>
                <Forecast />
            </div>
        </div>
    );
}