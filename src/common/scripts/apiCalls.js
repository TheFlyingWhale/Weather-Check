import { digestLocationData } from './dataDigester';

/**
 *  Takes latitude, longitude and a setterFunction
 */
export const getLocationData = (lat, lon, func) => {
    const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;
    //const sitename = 'https://github.com/theflyingwhale';
    const useragent = { 
        //'User-Agent': sitename,
        'Accept': 'application/json' 
    };
    fetch(url, {
        method: 'GET',
        headers: useragent
    })
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            func(digestLocationData(data));
        })
        .catch(error => {
            console.log('An error occured in getLocationData()');
            console.log(error);
        })
}

export const fetchLocation = (term, setResults, setBlured) => {
    setResults([]);

    const url = 'https://secure.geonames.org/searchJSON?';
    const queryParams = 'q=';
    const maxRows = '&maxRows=10';
    const username = "&username=walberg";

    if (term !== '') {
        fetch(`${url}${queryParams}${term}${maxRows}${username}`, {
            method: 'GET',
            Headers: 'Accept'
        })
            .then(response => {
                //console.log(response);
                return response.json();
            })
            .then(data => {
                //console.log(data);
                data.geonames.forEach(element => setResults(old => [...old, element]));
                setBlured(false);
            })
            .catch(error => {
                console.log('An error occured in fetchLocation()');
                console.log(error);
            });
    }
}

export const fetchTimezone = (lat, lon, setTimeZone) => {
    const url = 'https://secure.geonames.org/timezoneJSON?';
    const username = "&username=walberg"
    fetch(`${url}lat=${lat}&lng=${lon}${username}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log('An error occured in fetchTimeZone()');
            console.log(error);
        })
}