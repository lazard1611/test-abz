import React, {useEffect} from "react";
import Heading from "../heading/heading";
import Text from "../text/text";
import './hero.scss';
import Button from "../button/button";
import heroBG from '../../img/hero-bg.jpg';
import heroBGMob from '../../img/hero-bg-mob.jpg';
import animation from "../animation/animation";

const Hero = () => {
    const data = {
        heading: 'Test assignment for front-end developer',
        text: 'What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they\'ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.',
    }

    useEffect(() => {
        animation('hero')
    }, []);

    return (
        <section className='section hero'>
            <div className="hero__container">
                <picture className='hero__bg'>
                    <source srcSet={heroBGMob} media="(max-width: 768px)" />
                    <img src={heroBG} alt="hero bg" />
                </picture>

                <div className="hero__wrap">
                    <Heading mainHead={true} label={data.heading}/>
                    <Text label={data.text} />
                    <Button type='button' label= 'Sign up'/>
                </div>
            </div>
        </section>
    )
}

export default Hero;
