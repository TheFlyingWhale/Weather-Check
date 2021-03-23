import React from 'react';
import { getSymbol } from '../../common/scripts/getSymbol';

import './Row.scss';
import '../../common/styles/Colors.scss';

export const Row = (props) => {
    return(
        <div className="row">
            <div className="date">
                <p className="txt-medium gray-dark">{props.date}</p>
            </div>
            <div className="weatherIcons">
                <img className="icon" alt="icon" src={getSymbol(props.night)} />
                <img className="icon" alt="icon" src={getSymbol(props.morning)} />
                <img className="icon" alt="icon" src={getSymbol(props.noon)} />
                <img className="icon" alt="icon" src={getSymbol(props.evening)} />
            </div>
        </div>
    );
}