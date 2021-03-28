import React from 'react';
import { Favorite } from './Favorite';

//Css
import './Favorites.scss';
import '../../common/styles/Text.scss';

export const Favorites = props => {
    return (
        <div className="favoritesContainer">
            <div className="favorites-header">
                <h1 className="txt-large txt-w-medium black">Favorites</h1>
            </div>
            <div className="favorites">
                {props.favorites.map((element, i) => <Favorite key={i} location={element.name} lalo={element.lalo} setLocation={props.setLocation}/>)}
            </div>
        </div>
    );
}