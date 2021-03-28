/**
 *  Test/Development functions
 */

export const printStorage = () => {
    console.log(localStorage);
}

export const printJsonStorage = () => {
    console.log(JSON.parse(localStorage.getItem('favorites')));
}

export const clearStorage = () => {
    localStorage.clear();
}

export const createTempStorage = () => {
    const favorites = [
        //{name: 'Bergen', lat: 60.39, lon: 5.32},
        //{name: 'New York City', lat: 40.71, lon: -74.01},
        {name: 'Herøy', lalo: [65.98, 12.29]}
    ]

    localStorage.setItem('favorites', JSON.stringify(favorites));
}