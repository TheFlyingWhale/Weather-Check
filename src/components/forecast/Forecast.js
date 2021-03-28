import React from 'react';
import { Row } from './Row';
import { getMonthInString } from '../../common/scripts/getMonthInString';

//Styles
import './Forecast.scss';
import '../../common/styles/Text.scss';
import '../../common/styles/Colors.scss';

export const Forecast = props => {
    return (
        <div className="forecast">
            <div className="head-forecast">
                <h1
                    className="txt-large txt-w-medium black title"
                >Forecast</h1>
                <div className="timesOfDay">
                    <p
                        className="txt-small txt-w-normal gray-dark timeOfDay"
                    >Night</p>
                    <p
                        className="txt-small txt-w-normal gray-dark timeOfDay"
                    >Morning</p>
                    <p
                        className="txt-small txt-w-normal gray-dark timeOfDay"
                    >Noon</p>
                    <p
                        className="txt-small txt-w-normal gray-dark timeOfDay"
                    >Evening</p>
                </div>
            </div>
            <div className="body-forecast">
                <Row date={`${props.data.forecast.currentDay.date.day}. ${getMonthInString(props.data.forecast.currentDay.date.month)}`}
                    night={props.data.forecast.currentDay.symbols.night}
                    morning={props.data.forecast.currentDay.symbols.morning}
                    noon={props.data.forecast.currentDay.symbols.noon}
                    evening={props.data.forecast.currentDay.symbols.evening}
                />
                <Row date={`${props.data.forecast.inOneDay.date.day}. ${getMonthInString(props.data.forecast.inOneDay.date.month)}`}
                    night={props.data.forecast.inOneDay.symbols.night}
                    morning={props.data.forecast.inOneDay.symbols.morning}
                    noon={props.data.forecast.inOneDay.symbols.noon}
                    evening={props.data.forecast.inOneDay.symbols.evening}
                />
                <Row date={`${props.data.forecast.inTwoDays.date.day}. ${getMonthInString(props.data.forecast.inTwoDays.date.month)}`}
                    night={props.data.forecast.inTwoDays.symbols.night}
                    morning={props.data.forecast.inTwoDays.symbols.morning}
                    noon={props.data.forecast.inTwoDays.symbols.noon}
                    evening={props.data.forecast.inTwoDays.symbols.evening}
                />
                <Row date={`${props.data.forecast.inThreeDays.date.day}. ${getMonthInString(props.data.forecast.inThreeDays.date.month)}`}
                    night={props.data.forecast.inThreeDays.symbols.night}
                    morning={props.data.forecast.inThreeDays.symbols.morning}
                    noon={props.data.forecast.inThreeDays.symbols.noon}
                    evening={props.data.forecast.inThreeDays.symbols.evening}
                />
                <Row date={`${props.data.forecast.inFourDays.date.day}. ${getMonthInString(props.data.forecast.inFourDays.date.month)}`}
                    night={props.data.forecast.inFourDays.symbols.night}
                    morning={props.data.forecast.inFourDays.symbols.morning}
                    noon={props.data.forecast.inFourDays.symbols.noon}
                    evening={props.data.forecast.inFourDays.symbols.evening}
                />
                <Row date={`${props.data.forecast.inFiveDays.date.day}. ${getMonthInString(props.data.forecast.inFiveDays.date.month)}`}
                    night={props.data.forecast.inFiveDays.symbols.night}
                    morning={props.data.forecast.inFiveDays.symbols.morning}
                    noon={props.data.forecast.inFiveDays.symbols.noon}
                    evening={props.data.forecast.inFiveDays.symbols.evening}
                />
            </div>
        </div>
    );
}
/*
<Row date="Today 16.March"
    night={moon}
    morning={moon}
    noon={moon}
    evening={moon}
/>
<Row date="Monday 17.March" night={moon} morning={rain} noon={rain} evening={fairSun}/>
<Row date="Tuesday 18.March" night={moon} morning={fairSun} noon={sun} evening={sun}/>
<Row date="Wednesday 19.March" night={moon} morning={sun} noon={sun} evening={fairSun}/>
<Row date="Thursday 20.March" night={cloudy} morning={fairSun} noon={fairSun} evening={sun}/>
<Row date="Friday 21.March" night={moon} morning={sun} noon={sun} evening={sun}/>

*/