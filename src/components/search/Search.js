import React, { useState } from 'react';
import './Search.scss';
import '../../common/styles/Text.scss';

export const Search = () => {
    const [term, setTerm] = useState('');

    const handleChange = e => {
        setTerm(e.target.value);
    }

    return (
        <div className="inputHolder">
            <input
                type="text"
                className="searchBar txt-normal"
                placeholder="Search"
                onChange={handleChange}
                value={term}
            />
        </div>
    )
}