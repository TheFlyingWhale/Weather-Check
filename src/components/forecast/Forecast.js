import React from 'react';
import './Forecast.scss';
import '../../common/styles/Text.scss';
import '../../common/styles/Colors.scss';

import sun from '../../common/images/weatherIcons/Sun.svg';
import partiallyCloudy from '../../common/images/weatherIcons/PartiallyCloudy.svg';
import cloudy from '../../common/images/weatherIcons/Cloudy.svg';
import rain from '../../common/images/weatherIcons/Rain.svg';

export const Forecast = () => {
    return (
        <div className="forecast">
            <table>
                <thead>
                    <tr>
                        <th>
                            <h1
                                className="txt-large txt-w-medium black"
                            >Forecast</h1>
                        </th>
                        <th
                            className="txt-small txt-w-normal gray"
                        >Night</th>
                        <th
                            className="txt-small txt-w-normal gray"
                        >Morning</th>
                        <th
                            className="txt-small txt-w-normal gray"
                        >Afternoon</th>
                        <th
                            className="txt-small txt-w-normal gray"
                        >Evening</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row">
                        <td>Today 16.March</td>
                        <td><img alt="sun" src={sun}/></td>
                        <td><img alt="sun" src={partiallyCloudy}/></td>
                        <td><img alt="sun" src={cloudy}/></td>
                        <td><img alt="sun" src={rain}/></td>
                    </tr>
                    <tr className="row">
                        <td>Monday 17.March</td>
                        <td><img alt="sun" src={sun}/></td>
                        <td><img alt="sun" src={partiallyCloudy}/></td>
                        <td><img alt="sun" src={cloudy}/></td>
                        <td><img alt="sun" src={rain}/></td>
                    </tr>
                    <tr className="row">
                        <td>Tuesday 18.March</td>
                        <td><img alt="sun" src={sun}/></td>
                        <td><img alt="sun" src={partiallyCloudy}/></td>
                        <td><img alt="sun" src={cloudy}/></td>
                        <td><img alt="sun" src={rain}/></td>
                    </tr>
                    <tr className="row">
                        <td>Wednesday 19.March</td>
                        <td><img alt="sun" src={sun}/></td>
                        <td><img alt="sun" src={partiallyCloudy}/></td>
                        <td><img alt="sun" src={cloudy}/></td>
                        <td><img alt="sun" src={rain}/></td>
                    </tr>
                    <tr className="row">
                        <td>Thursday 20.March</td>
                        <td><img alt="sun" src={sun}/></td>
                        <td><img alt="sun" src={partiallyCloudy}/></td>
                        <td><img alt="sun" src={cloudy}/></td>
                        <td><img alt="sun" src={rain}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}