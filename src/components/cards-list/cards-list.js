import React, {useState} from "react";
import Heading from "../heading/heading";
import Card from "../card/card";
import './cards-list.scss';
import Button from "../button/button";

const CardList = () => {
    const data = {
        head: 'Working with GET request',
    }



    return (
        <section className='section cards_list'>
            <div className="cards_list__container">
                <Heading label={data.head}/>
                <div className='cards_list__wrap'>
                    <Card userId={1}/>
                    <Card userId={2}/>
                    <Card userId={3}/>
                </div>
                <div className="cards_list__btn_wrap">
                    <Button label='Show more'/>
                </div>
            </div>
        </section>

    )
}

export default CardList;
