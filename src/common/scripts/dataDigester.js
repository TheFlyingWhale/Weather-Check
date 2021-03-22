/**
 *  Takes a JSON object as input and returns usable weather data
 */
export const digestLocationData = obj => {
    const data = obj.properties.timeseries;
    const digestedData = {
        instant: {
            temperature: data[0].data.instant.details.air_temperature,
            windSpeed: data[0].data.instant.details.wind_speed,
            precipitation: data[0].data.next_1_hours.details.precipitation_amount,
            symbol: data[0].data.next_1_hours.summary.symbol_code
        },
        forecast: {
            currentDay: {
                date: null,
            },
            inOneDay: {
                date: null,
            },
            inTwoDays: {
                date: null,
            },
            inThreeDays: {
                date: null,
            },
            inFourDays: {
                date: null,
            },
            inFiveDays: {
                date: null,
            }
        }
    }
    return digestedData;
}

/**
 * Empty dataModel to use in useState
 */
export const dataModel = {
    instant: {
        temperature: null,
        windSpeed: null,
        precipitation: null,
        symbol: null
    },
    forecast: {
        currentDay: {
            date: null,
        },
        inOneDay: {
            date: null,
        },
        inTwoDays: {
            date: null,
        },
        inThreeDays: {
            date: null,
        },
        inFourDays: {
            date: null,
        },
        inFiveDays: {
            date: null,
        }
    }
}
/*
    <Favorite location="New York City" lalo={[40.71, -74.01]} />
    <Favorite location="Beijing" lalo={[39.91, 116.40]}/>
*/