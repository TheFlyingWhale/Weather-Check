import React from 'react';
import { Result } from './Result';

import './Search.scss';
import '../../common/styles/Colors.scss'
import '../../common/styles/Text.scss'

export const Results = props => {
    const searchResults = props.results.map(element => ({name: element.toponymName, lat: element.lat, lon: element.lng, adminName: element.adminName1}));
    const searchResultsElements = searchResults.map((element, index) => <Result handleSelect={props.handleSelect} handleBlur={props.handleBlur} key={index} name={element.name} element={element} adminName={element.adminName}/>)

    if (!props.blured && props.term !== '') {
        return (
            <div className="Results-container">
                {searchResultsElements}
            </div>
        )
    }else{
        return null
    }
}