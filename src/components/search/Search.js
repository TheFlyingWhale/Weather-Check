import React, { useState, useEffect } from 'react';
import { Results } from './Results';
import './Search.scss';
import '../../common/styles/Text.scss';
import { fetchLocation } from '../../common/scripts/apiCalls';
import searchIcon from '../../common/images/uiIcons/searchIcon.svg';
import closeIcon from '../../common/images/uiIcons/exit.svg';

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
    const handleBlur = e => {
        setBlured(true);
    }

    const deactivateBlur = () => {
        //console.log(`Blured: ${blured}`);
        setBlured(false);
    }

    const handleClick = () => {
        if (!blured) {
            setBlured(true);
        }
    }

    useEffect(() => {
        fetchLocation(term, setResults, setBlured);
    },[term]);

    return (
        <div>
            <div className="inputHolder">
                <form className="inputContainer">
                    <input
                        type="text"
                        className="searchBar txt-normal"
                        placeholder="Search"
                        onChange={handleChange}
                        value={term}
                        onFocus={deactivateBlur}
                    />
                    <img 
                        className={blured ? "searchIcon" : "closeIcon"}
                        src={blured ? searchIcon : closeIcon}
                        onClick={handleClick}
                        alt={blured ? "search" : "close search results"}
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