import React from 'react';

import '../../common/styles/Text.scss';
import '../../common/styles/Colors.scss';
import './Search.scss';

export const Result = props => {

    const handleClick = e => {
        e.preventDefault();
        props.handleSelect(props.element);
        props.handleBlur();
    }

    return (
        <div 
            className="searchResultElement"
            onClick={handleClick}
        >
            <p
                className="resultName txt-normal black"
            >{props.name}</p>
            <p
                className="resultAdmin txt-small gray-dark"
            >
                {props.adminName}
            </p>
        </div>
    );
}