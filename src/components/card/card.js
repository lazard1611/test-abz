import React, { useState, useEffect } from "react";
import './card.scss';
import TestServices from '../../services/test-services';

const Card = ({ userId }) => {
    const [dataState, setDataState] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const testServices = new TestServices();
                const userData = await testServices.getCardResource(userId);
                setDataState(userData.user);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, [2]);

    if (!dataState) {
        return <div>Loading...</div>;
    }

    const { photo, name, position, email, phone } = dataState;

    return (
        <div className='card'>
            <picture className='card__pic'>
                <img src={photo} alt={name}/>
            </picture>
            <div className="card__name">{name}</div>
            <div className="card__position">{position}</div>
            <div className="card__email">{email}</div>
            <div className="card__phone">{phone}</div>
        </div>
    )
}

export default Card;
