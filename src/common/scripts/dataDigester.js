/**
 *  Takes a JSON object as input and returns usable weather data
 */
export const digestLocationData = obj => {
    const data = obj.properties.timeseries;
    const days = gatherDays(data);
    //console.log(data);
    //console.log(filterRelevant(data));

    const currentDaySymbols = retriveTheFourSymbols(days.firstDay, 'current');
    const inOneDaysSymbols = retriveTheFourSymbols(days.secoundDay, 'inOneDay');
    const inTwoDaysSymbols = retriveTheFourSymbols(days.thirdDay, 'inTwoDays');
    const inThreeDaysSymbols = retriveTheFourSymbols(days.fourthDay, 'inThreeDays', days.thirdDay);
    const inFourDaysSymbols = retriveTheFourSymbols(days.fifthDay, 'inFourDays', days.fourthDay);
    const inFiveDaysSymbols = retriveTheFourSymbols(days.sixthDay, 'inFiveDays', days.fifthDay);

    const digestedData = {
        instant: {
            temperature: data[0].data.instant.details.air_temperature,
            windSpeed: data[0].data.instant.details.wind_speed,
            precipitation: data[0].data.next_1_hours.details.precipitation_amount,
            symbol: data[0].data.next_1_hours.summary.symbol_code,
            time: data[0].time
        },
        forecast: {
            currentDay: {
                date: convertTime(days.firstDay[0].time, 'month'),
                symbols: currentDaySymbols
            },
            inOneDay: {
                date: convertTime(days.secoundDay[0].time, 'month'),
                symbols: inOneDaysSymbols
            },
            inTwoDays: {
                date: convertTime(days.thirdDay[0].time, 'month'),
                symbols: inTwoDaysSymbols
            },
            inThreeDays: {
                date: convertTime(days.fourthDay[0].time, 'month'),
                symbols: inThreeDaysSymbols
            },
            inFourDays: {
                date: convertTime(days.fifthDay[0].time, 'month'),
                symbols: inFourDaysSymbols
            },
            inFiveDays: {
                date: convertTime(days.sixthDay[0].time, 'month'),
                symbols: inFiveDaysSymbols
            }
        }
    }
    //console.log(days);
    //console.log(digestedData);
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
        symbol: null,
        time: null
    },
    forecast: {
        currentDay: {
            date: {
                year: null,
                month: null,
                day: null
            },
            symbols: {
                night: null,
                morning: null,
                noon: null,
                evening: null
            }
        },
        inOneDay: {
            date: {
                year: null,
                month: null,
                day: null
            },
            symbols: {
                night: null,
                morning: null,
                noon: null,
                evening: null
            }
        },
        inTwoDays: {
            date: {
                year: null,
                month: null,
                day: null
            },
            symbols: {
                night: null,
                morning: null,
                noon: null,
                evening: null
            }
        },
        inThreeDays: {
            date: {
                year: null,
                month: null,
                day: null
            },
            symbols: {
                night: null,
                morning: null,
                noon: null,
                evening: null
            }
        },
        inFourDays: {
            date: {
                year: null,
                month: null,
                day: null
            },
            symbols: {
                night: null,
                morning: null,
                noon: null,
                evening: null
            }
        },
        inFiveDays: {
            date: {
                year: null,
                month: null,
                day: null
            },
            symbols: {
                night: null,
                morning: null,
                noon: null,
                evening: null
            }
        }
    }
}

//Takes an array of days with time and filters it returning the first, secound, third, fourth, fifth and sixth day
const gatherDays = (arr) => {
    const convertedTimeFirstDay = convertTime(arr[0].time);

    const firstDay = [];
    const secoundDay = [];
    const thirdDay = [];
    const fourthDay = [];
    const fifthDay = [];
    const sixthDay = [];


    let firstStop = false;
    let secoundStop = false;
    let thirdStop = false;
    let fourthDayStop = false;
    let fifthDayStop = false;
    let sixthDayStop = false;

    let i = 0;
    let i2;
    while (!firstStop) {
        firstDay.push(arr[i]);
        i++;
        if (convertTime(arr[i].time).date.day !== convertedTimeFirstDay.date.day) {
            i2 = i;
            firstStop = true;
        }
    }
    const convertedTimeSecoundDay = convertTime(arr[i2].time);

    let i3;

    while (!secoundStop) {
        secoundDay.push(arr[i2]);
        i2++;
        if (convertTime(arr[i2].time).date.day !== convertedTimeSecoundDay.date.day) {
            i3 = i2;
            secoundStop = true;
        }
    }
    const convertedTimeThirdDay = convertTime(arr[i3].time);

    let i4;

    while (!thirdStop) {
        thirdDay.push(arr[i3]);
        i3++;
        if (convertTime(arr[i3].time).date.day !== convertedTimeThirdDay.date.day) {
            i4 = i3;
            thirdStop = true;
        }
    }
    const convertedTimeFourthDay = convertTime(arr[i4].time);

    let i5;

    while (!fourthDayStop) {
        fourthDay.push(arr[i4]);
        i4++;
        if (convertTime(arr[i4].time).date.day !== convertedTimeFourthDay.date.day) {
            i5 = i4;
            fourthDayStop = true;
        }
    }
    const convertedTimeFifthDay = convertTime(arr[i5].time);

    let i6;

    while (!fifthDayStop) {
        fifthDay.push(arr[i5]);
        i5++;
        if (convertTime(arr[i5].time).date.day !== convertedTimeFifthDay.date.day) {
            i6 = i5;
            fifthDayStop = true;
        }
    }
    const convertedTimeSixthDay = convertTime(arr[i6].time);

    while (!sixthDayStop) {
        sixthDay.push(arr[i6]);
        i6++;
        if (convertTime(arr[i6].time).date.day !== convertedTimeSixthDay.date.day) {
            sixthDayStop = true;
        }
    }

    //console.log(retriveTheFourSymbols(firstDay));

    return {
        firstDay: firstDay,
        secoundDay: secoundDay,
        thirdDay: thirdDay,
        fourthDay: fourthDay,
        fifthDay: fifthDay,
        sixthDay: sixthDay
    }
}

//Takes a date and return a structured object
const convertTime = (input, spec) => {
    //const dateAndTime = arr[0].time.split('T');
    const dateAndTime = input.split('T');
    const date = dateAndTime[0].split('-');
    const time = dateAndTime[1].split(':');

    if (spec === 'month') {
        return {
            year: date[0],
            month: date[1],
            day: date[2]
        }
    }

    return {
        date: {
            year: date[0],
            month: date[1],
            day: date[2]
        },
        time: {
            hour: time[0],
            minutes: time[1],
            secounds: time[2]
        }
    }
}

//Goes trough an array of days and returns the symbols for night, morning, noon and evening
const retriveTheFourSymbols = (input, day, secInput) => {
    let firstSymbol, secoundSymbol, thirdSymbol, fourthSymbol;
    input.forEach(element => {
        //console.log(element);
        if (day === 'current' || day === 'inOneDay') {
            if (convertTime(element.time).time.hour === '00') {
                firstSymbol = element.data.next_1_hours.summary.symbol_code;
            }
            if (convertTime(element.time).time.hour === '06') {
                secoundSymbol = element.data.next_1_hours.summary.symbol_code;
            }
            if (convertTime(element.time).time.hour === '12') {
                thirdSymbol = element.data.next_1_hours.summary.symbol_code;
            }
            if (convertTime(element.time).time.hour === '18') {
                fourthSymbol = element.data.next_1_hours.summary.symbol_code;
            }
        } else if (day === 'inTwoDays') {
            if (convertTime(element.time).time.hour === '00') {
                firstSymbol = element.data.next_1_hours.summary.symbol_code;
            } else if (convertTime(element.time).time.hour === '06') {
                secoundSymbol = element.data.next_6_hours.summary.symbol_code;
            } else if (convertTime(element.time).time.hour === '12') {
                thirdSymbol = element.data.next_6_hours.summary.symbol_code;
            } else if (convertTime(element.time).time.hour === '18') {
                fourthSymbol = element.data.next_6_hours.summary.symbol_code;
            }
        } else if (day === 'inThreeDays' || day === 'inFourDays' || day === 'inFiveDays') {
            if (convertTime(element.time).time.hour === '00') {
                firstSymbol = element.data.next_6_hours.summary.symbol_code;
            } else if (convertTime(element.time).time.hour === '06') {
                secoundSymbol = element.data.next_6_hours.summary.symbol_code;
            } else if (convertTime(element.time).time.hour === '12') {
                thirdSymbol = element.data.next_6_hours.summary.symbol_code;
            } else if (convertTime(element.time).time.hour === '18') {
                fourthSymbol = element.data.next_6_hours.summary.symbol_code;
            }
        }
    });
    return { night: firstSymbol, morning: secoundSymbol, noon: thirdSymbol, evening: fourthSymbol }
}

/*
const filterRelevant = arr => {
    const relevant = [];
    arr.forEach(element => {
        if (element.time.includes('00:00:00')) {
            relevant.push(element);
        } else if (element.time.includes('06:00:00')) {
            relevant.push(element);
        } else if (element.time.includes('12:00:00')) {
            relevant.push(element);
        } else if (element.time.includes('18:00:00')) {
            relevant.push(element);
        }
    })
    return relevant;
}
*/