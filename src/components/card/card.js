import React from "react";
import './card.scss';
import placeholder from '../../img/placeholder.svg';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const Card = ({ userData }) => {
    const { photo, name, position, email, phone, id } = userData;

    return (
        <div className='card'>
            <picture className='card__pic'>
                <img src={photo || placeholder} alt={name}/>
            </picture>
            <div className="card__name">{name}</div>
            <div className="card__position">{position}</div>

            <a
                href={`mailto:${email}`}
                data-tooltip-id={id}
                data-tooltip-content={email}
                data-tooltip-place="bottom"
                data-tooltip-offset='4'
                data-tooltip-variant='dark'
                data-tooltip-class-name='tooltip_custom'
                className="card__email"
            >
                {email}
            </a>
            <Tooltip id={id} />
            <div className="card__phone">{phone}</div>
        </div>
    )
}

export default Card;
