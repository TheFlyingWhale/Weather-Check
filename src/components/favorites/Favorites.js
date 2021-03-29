import React from 'react';
import { Favorite } from './Favorite';

//Css
import './Favorites.scss';
import '../../common/styles/Text.scss';

export const Favorites = props => {
    //console.log(props.favorites);
    return (
        <div className="favoritesContainer">
            <div className="favorites-header">
                {props.favorites.length !== 0 ? <h1 className="txt-large txt-w-medium black">Favorites</h1> : null}
            </div>
            <div className="favorites">
                {props.favorites.map((element, i) => <Favorite key={i+element.lalo[0]+element.lalo[1]} location={element.name} lalo={element.lalo} setLocation={props.setLocation}/>)}
            </div>
        </div>
    );
}