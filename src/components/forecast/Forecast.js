import React from 'react';
import { Row } from './Row';

//Images
import sun from '../../common/images/weatherIcons/Sun.svg';
import fairSun from '../../common/images/weatherIcons/FairSun.svg';
import cloudy from '../../common/images/weatherIcons/Cloudy.svg';
import rain from '../../common/images/weatherIcons/Rain.svg';
import thunder from '../../common/images/weatherIcons/Thunder.svg'
import moon from '../../common/images/weatherIcons/Moon.svg'

//Styles
import './Forecast.scss';
import '../../common/styles/Text.scss';
import '../../common/styles/Colors.scss';

export const Forecast = () => {
    return (
        <div className="forecast">
            <div className="head-forecast">
                <h1
                    className="txt-large txt-w-medium black title"
                >Forecast</h1>
                <div className="timesOfDay">
                    <p
                        className="txt-small txt-w-normal gray timeOfDay"
                    >Night</p>
                    <p
                        className="txt-small txt-w-normal gray timeOfDay"
                    >Morning</p>
                    <p
                        className="txt-small txt-w-normal gray timeOfDay"
                    >Afternoon</p>
                    <p
                        className="txt-small txt-w-normal gray timeOfDay"
                    >Evening</p>
                </div>
            </div>
            <div className="body-forecast">
                <Row date="Today 16.March" night={moon} morning={fairSun} afternoon={cloudy} evening={rain}/>
                <Row date="Monday 17.March" night={thunder} morning={rain} afternoon={rain} evening={fairSun}/>
                <Row date="Tuesday 18.March" night={moon} morning={fairSun} afternoon={sun} evening={sun}/>
                <Row date="Wednesday 19.March" night={moon} morning={sun} afternoon={sun} evening={fairSun}/>
                <Row date="Thursday 20.March" night={cloudy} morning={fairSun} afternoon={fairSun} evening={sun}/>
                <Row date="Friday 21.March" night={moon} morning={sun} afternoon={sun} evening={sun}/>
            </div>
        </div>
    );
}