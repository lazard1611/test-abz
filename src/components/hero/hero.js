import React from "react";
import Heading from "../heading/heading";
import Text from "../text/text";
import './hero.scss';
import Button from "../button/button";
import heroBG from '../../img/hero-bg.jpg'

const Hero = () => {
    const data = {
        heading: 'Test assignment for front-end developer',
        text: 'What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they\'ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.',
    }

    return (
        <section className='section hero'>
            <div className="hero__container">
                <picture className='hero__bg'>
                    <img src={heroBG} alt="hero bg"/>
                </picture>

                <div className="hero__wrap">
                    <Heading label={data.heading}/>
                    <Text label={data.text} />
                    <Button label= 'Sign up'/>
                </div>
            </div>
        </section>
    )
}

export default Hero;
