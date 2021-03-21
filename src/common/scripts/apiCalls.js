import { digestLocationData } from './dataDigester';
/**
 *  Takes (latitude, longitude and a setterFunction
 */
export const getLocationData = (lat, lon, func) => {
    const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;
    const sitename = 'https://github.com/theflyingwhale';
    const useragent = { 'User-Agent': sitename };
    fetch(url, {
        method: 'GET',
        headers: useragent
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
         func(digestLocationData(data));
    })
    .catch(error => {
        console.log('An error occured in getLocationData()');
        console.log(error);
    })
}