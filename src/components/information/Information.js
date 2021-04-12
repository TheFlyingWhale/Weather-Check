import React from 'react';
import { getSymbol } from '../../common/scripts/getSymbol';
import { FavoriteButton } from '../favoriteButton/FavoriteButton';


import './Information.scss';
import '../../common/styles/Text.scss';
import '../../common/styles/Colors.scss';

export const Information = props => {
    //console.log(props.location.name.length < 8 && !props.onMobile);

    return (
        <div className="information">
            <FavoriteButton 
                isFavorite={props.isFavorite} 
                setIsFavorite={props.setIsFavorite}
                setFavorites={props.setFavorites}
                location={props.location}
                favorites={props.favorites}
            />
            <img className="weatherIcon" src={getSymbol(props.data.instant.symbol)} alt="weather" />
            <h1
                className={
                    props.location.name.length > 8 && props.onMobile ?
                    "txt-big-smaller txt-w-medium black locationName" :
                    "txt-big txt-w-medium black locationName"
                }
            >{props.location.name !== undefined ? props.location.name : 'Herøy'}</h1>
            <div className="details">
                <div className="detail">
                    <h2
                        className="txt-small txt-w-normal gray-dark"
                    >Temperature</h2>
                    <p
                        className="txt-large txt-w-medium black"
                    >{props.data.instant.temperature} °C</p>
                </div>
                <div className="detail">
                    <h2
                        className="txt-small txt-w-normal gray-dark"
                    >Rainfall</h2>
                    <p
                        className="txt-large txt-w-medium black"
                    >{props.data.instant.precipitation} mm</p>
                </div>
                <div className="detail">
                    <h2
                        className="txt-small txt-w-normal gray-dark"
                    >Wind</h2>
                    <p
                        className="txt-large txt-w-medium black"
                    >{props.data.instant.windSpeed} m/s</p>
                </div>
            </div>
        </div>
    );
}