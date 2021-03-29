import React from 'react';
import { getSymbol } from '../../common/scripts/getSymbol';

import './Row.scss';
import '../../common/styles/Colors.scss';
import '../../common/styles/Text.scss'

export const Row = props => {
    return (
        <div className="row-container">
            {props.onMobile ? <Date date={props.date} /> : null}
            <div className="row">
                {props.onMobile ? null : <Date date={props.date} />}
                <div className="weatherIcons">
                    <Icon symbol={getSymbol(props.night)} onMobile={props.onMobile} timeOfDay="night" />
                    <Icon symbol={getSymbol(props.morning)} onMobile={props.onMobile} timeOfDay="morning" />
                    <Icon symbol={getSymbol(props.noon)} onMobile={props.onMobile} timeOfDay="noon" />
                    <Icon symbol={getSymbol(props.evening)} onMobile={props.onMobile} timeOfDay="evening" />
                </div>
            </div>
        </div>
    );
}

const Date = props => {
    return (
        <div className="date">
            <p className="txt-medium gray-dark">{props.date}</p>
        </div>
    )
}

const Icon = props => {
    return (
        <div className="icon-container">
            <img className="icon" alt="icon" src={props.symbol} />
            {props.onMobile ? <p className="txt-small gray">{props.timeOfDay}</p> : null}
        </div>
    )
}