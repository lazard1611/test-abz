import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const animation = (section) => {
    const $section = document.querySelector(`.${section}`);

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        paused: true,
    });

    ScrollTrigger.create({
        trigger: `.${section}`,
        start: "top 80%",
        end: "bottom 50%",
        // markers: true,
        animation: tl,
    });

    tl
        .fromTo($section.querySelectorAll(".fade-anim"),
        {
            y: 60,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut",
            stagger: 0.5,
        })
}

export default animation;
