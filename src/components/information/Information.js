import React from 'react';
import { getSymbol } from '../../common/scripts/getSymbol';

import './Information.scss';
import '../../common/styles/Text.scss';
import '../../common/styles/Colors.scss';

export const Information = props => {
    //const test = getSymbol(undefined);
    return (
        <div className="information">
            <img className="weatherIcon" src={getSymbol(props.data.instant.symbol)} alt="weather" />
            <h1
                className="txt-big txt-w-medium black"
            >{props.location.name !== undefined ? props.location.name : 'Herøy'}</h1>
            <div className="details">
                <div className="detail">
                    <h2
                        className="txt-small txt-w-normal gray"
                    >Temperature</h2>
                    <p
                        className="txt-large txt-w-medium gray-dark"
                    >{props.data.instant.temperature} °C</p>
                </div>
                <div className="detail">
                    <h2
                        className="txt-small txt-w-normal gray"
                    >Rainfall</h2>
                    <p
                        className="txt-large txt-w-medium gray-dark"
                    >{props.data.instant.precipitation} mm</p>
                </div>
                <div className="detail">
                    <h2
                        className="txt-small txt-w-normal gray"
                    >Wind</h2>
                    <p
                        className="txt-large txt-w-medium gray-dark"
                    >{props.data.instant.windSpeed} m/s</p>
                </div>
            </div>
        </div>
    );
}