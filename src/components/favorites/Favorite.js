import React, { useState, useEffect } from 'react';
import { dataModel } from '../../common/scripts/dataDigester';
import { getLocationData } from '../../common/scripts/apiCalls';
import { getSymbol } from '../../common/scripts/getSymbol';

import './Favorites.scss';

import '../../common/styles/Colors.scss';
import '../../common/styles/Text.scss';

export const Favorite = props => {
    const [location] = useState({ name: props.location, lalo: props.lalo });
    const [data, setData] = useState(dataModel);

    useEffect(() => {
        getLocationData(location.lalo[0], location.lalo[1], setData);
    }, [location]);

    return (
        <div className="favorite">
            <img className="favoriteWeatherIcon" alt="icon" src={getSymbol(data.instant.symbol)} />
            <h2 className="txt-large txt-w-normal black location">{props.location}</h2>
            <p className="txt-small txt-w-normal gray">{data.instant.temperature}°C</p>
        </div>
    );
}