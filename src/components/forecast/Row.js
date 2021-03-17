import React from 'react';
import './Row.scss';
import '../../common/styles/Colors.scss';

export const Row = (props) => {
    return(
        <div className="row">
            <div className="date">
                <p className="txt-medium gray-dark">{props.date}</p>
            </div>
            <div className="weatherIcons">
                <img className="icon" alt="icon" src={props.night} />
                <img className="icon" alt="icon" src={props.morning} />
                <img className="icon" alt="icon" src={props.afternoon} />
                <img className="icon" alt="icon" src={props.evening} />
            </div>
        </div>
    );
}