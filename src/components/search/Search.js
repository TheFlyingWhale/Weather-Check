import React, { useState, useEffect } from 'react';
import { Results } from './Results';
import './Search.scss';
import '../../common/styles/Text.scss';
import { fetchLocation } from '../../common/scripts/apiCalls';

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

    //handleBlur removes the results panel on input blur
    const handleBlur = () => {
        //console.log(`Blured: ${blured}`);
        setBlured(true);
    }

    const deactivateBlur = () => {
        //console.log(`Blured: ${blured}`);
        setBlured(false);
    }

    useEffect(() => {
        //console.log('effect triggered');
        fetchLocation(term, setResults, setBlured);
    },[term]);

    return (
        <div>
            <div className="inputHolder">
                <form>
                    <input
                        type="text"
                        className="searchBar txt-normal"
                        placeholder="Search"
                        onChange={handleChange}
                        value={term}
                        
                        onFocus={deactivateBlur}
                    />
                </form>
            </div>
            <Results
                handleSelect={props.handleSelect}
                handleBlur={handleBlur}
                results={results}
                blured={blured}
                term={term}
            />
        </div>
    )
}