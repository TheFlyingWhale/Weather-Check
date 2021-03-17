import React from 'react';
import weatherIcon from '../../common/images/weatherIcons/Sun.svg'
import './Information.scss';
import '../../common/styles/Text.scss';
import '../../common/styles/Colors.scss';

export const Information = () => {
    return (
        <div className="information">
            <img className="weatherIcon" src={weatherIcon} alt="weather" />
            <h1
                className="txt-big txt-w-medium black"
            >Herøy</h1>
            <div className="details">
                <div className="detail">
                    <h2
                        className="txt-small txt-w-normal gray"
                    >Temperature</h2>
                    <p
                        className="txt-large txt-w-medium gray-dark"
                    >24 °C</p>
                </div>
                <div className="detail">
                    <h2
                        className="txt-small txt-w-normal gray"
                    >Rainfall</h2>
                    <p
                        className="txt-large txt-w-medium gray-dark"
                    >0 mm</p>
                </div>
                <div className="detail">
                    <h2
                        className="txt-small txt-w-normal gray"
                    >Wind</h2>
                    <p
                        className="txt-large txt-w-medium gray-dark"
                    >2 m/s</p>
                </div>
            </div>
        </div>
    );
}