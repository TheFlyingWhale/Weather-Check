import React, { useState } from 'react';
import { Results } from './Results';
import './Search.scss';
import '../../common/styles/Text.scss';

export const Search = (props) => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [blured, setBlured] = useState(true);

    //handleChange takes care of setting the input
    const handleChange = e => {
        setTerm(e.target.value);
        if (term === '') {
            setResults([]);
        }
    }

    //handleSearch takes care of fetching results based on the input
    const handleSearch = e => {
        e.preventDefault();
        setResults([]);

        const url = 'https://api.geonames.org/searchJSON?';
        const queryParams = 'q=';
        const maxRows = '&maxRows=10';
        const username = "&username=walberg"

        if (term !== '') {
            fetch(`${url}${queryParams}${term}${maxRows}${username}`)
                .then(response => response.json())
                .then(data => {
                    data.geonames.forEach(element => setResults(old => [...old, element]));
                    setBlured(false);
                })
                .catch(error => {
                    console.log('An error occured in Search.js');
                    console.log(error);
                });
        }
    }

    //handleBlur removes the results panel on input blur
    const handleBlur = () => {
        setBlured(true);
    }

    return (
        <div>
            <div className="inputHolder">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="searchBar txt-normal"
                        placeholder="Search"
                        onChange={handleChange}
                        value={term}
                    />
                </form>
            </div>
            <Results
                handleSelect={props.handleSelect}
                handleBlur={handleBlur}
                results={results}
                blured={blured}
            />
        </div>
    )
}