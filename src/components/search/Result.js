import React from 'react';

import '../../common/styles/Text.scss';
import '../../common/styles/Colors.scss';
import './Search.scss';

export const Result = props => {

    const handleClick = () => {
        props.handleSelect(props.element);
        props.handleBlur();
    }

    return(
        <p className="searchResultElement txt-normal black" onClick={handleClick}>{props.name}</p>
    );
}