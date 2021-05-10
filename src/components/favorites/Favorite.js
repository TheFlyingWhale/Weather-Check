import React, { useState, useEffect } from 'react';
import { dataModel } from '../../common/scripts/dataDigester';
import { getLocationData } from '../../common/scripts/apiCalls';
import { getSymbol } from '../../common/scripts/getSymbol';
import getFormatedWord from '../../common/scripts/getFormatedWord';


import './Favorites.scss';

import '../../common/styles/Colors.scss';
import '../../common/styles/Text.scss';

export const Favorite = props => {
    const [location] = useState({ name: props.location, lalo: props.lalo });
    const [data, setData] = useState(dataModel);

    const handleClick = () => {
        props.setLocation(location);
    }

    useEffect(() => {
        getLocationData(location.lalo[0], location.lalo[1], setData);
    }, [location]);

    return (
        <div className="favorite" onClick={handleClick}>
            <img className="favoriteWeatherIcon" alt="icon" src={getSymbol(data.instant.symbol)} />
            {getFormatedWord(props.location)}
            <p className="txt-small txt-w-normal gray">{data.instant.temperature}°C</p>
        </div>
    );
}