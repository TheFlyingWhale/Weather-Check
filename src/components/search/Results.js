import React from 'react';
import { Result } from './Result';

import './Search.scss';
import '../../common/styles/Colors.scss'
import '../../common/styles/Text.scss'

export const Results = props => {
    const searchResults = props.results.map(element => ({name: element.toponymName, lat: element.lat, lng: element.lng}));
    const searchResultsElements = searchResults.map((element, index) => <Result handleSelect={props.handleSelect} handleBlur={props.handleBlur} key={index} name={element.name} element={element}/>)

    if (!props.blured) {
        return (
            <div className="Results-container">
                {searchResultsElements}
            </div>
        )
    }else{
        return null
    }
}