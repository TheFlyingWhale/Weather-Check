import { useState } from 'react';
import favoriteNegative from '../../common/images/uiIcons/favoriteNegative.svg';
import favoritePositive from '../../common/images/uiIcons/favoritePositive.svg';
import favoriteAdd from '../../common/images/uiIcons/favoriteAdd.svg';
import favoriteRemove from '../../common/images/uiIcons/favoriteRemove.svg';
import './FavoriteButton.scss';

export const FavoriteButton = props => {
    const [hovered, setHovered] = useState(false);

    const handleClick = () => {
        if(!props.isFavorite){
            props.setFavorites(prev => [...prev, props.location]);   
        }else if(props.isFavorite){
            props.setFavorites(props.favorites.filter(location => location.name !== props.location.name));
        }
        props.isFavorite ? props.setIsFavorite(false) : props.setIsFavorite(true);
    }

    const handleIcon = () => {
        if(props.isFavorite && hovered){
            return favoriteRemove;
        }else if(props.isFavorite && !hovered){
            return favoritePositive;
        }else if(!props.isFavorite && hovered){
            return favoriteAdd;
        }else if(!props.isFavorite && !hovered){
            return favoriteNegative;
        }
    }

    return (
        <img
            className="FavoriteButton"
            alt="favorite" 
            src={handleIcon()}
            onClick={handleClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        />
    )
}