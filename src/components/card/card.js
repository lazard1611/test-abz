import React from "react";
import './card.scss';
import placeholder from '../../img/placeholder.svg';
import Tooltip from "../tooltip/tooltip";

const Card = ({ userData }) => {
    const { photo, name, position, email, phone } = userData;

    return (
        <div className='card'>
            <picture className='card__pic'>
                <img src={photo || placeholder} alt={name}/>
            </picture>
            <div className="card__name">{name}</div>
            <div className="card__position">{position}</div>
            <Tooltip text={email}/>
            <div className="card__phone">{phone}</div>
        </div>
    )
}

export default Card;
