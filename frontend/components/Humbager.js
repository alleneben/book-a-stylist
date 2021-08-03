import React, {
  useEffect,
  useRef,
} from 'react';

import { gsap } from 'gsap';
import Link from 'next/link';

// import beijing from '../public/austin.webp';
// import dallas from '../public/austin.webp';
// import sanfrancisco from '../public/austin.webp';
// import austin from '../public/barbar.jpg';
// import newyork from '../public/newyork.webp';
import {
  fadeInUp,
  handleCity,
  handleCityReturn,
  handleHover,
  handleHoverExit,
  staggerReveal,
  staggerRevealClose,
} from './Animation';

const cities = [
    { name: "Dallas", image: '/' },
    { name: "Austin", image: '/' },
    { name: "New York", image: '/' },
    { name: "San Francisco", image: '/' },
    { name: "Beijing", image: '/' }
];

const Hamburger = ({ state }) => {
    // Create varibles of our dom nodes
    let menuLayer = useRef(null);
    let reveal1 = useRef(null);
    let reveal2 = useRef(null);
    let cityBackground = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let info = useRef(null);

    useEffect(() => {
        // If the menu is open and we click the menu button to close it.
        if (state.clicked === false) {
            // If menu is closed and we want to open it.

            staggerRevealClose(reveal2, reveal1);
            // Set menu to display none
            gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // Set menu to display block
            gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
            //Allow menu to have height of 100%
            gsap.to([reveal1, reveal2], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            staggerReveal(reveal1, reveal2);
            fadeInUp(info);
            // staggerText(line1.current, line2.current, line3.current);
        }
    }, [state]);

    return (
        <div ref={el => (menuLayer = el)} className='hamburger-menu'>
            <div
                ref={el => (reveal1 = el)}
                className='menu-secondary-background-color'></div>
            <div ref={el => (reveal2 = el)} className='menu-layer'>
                <div
                    ref={el => (cityBackground = el)}
                    className='menu-city-background'></div>
                <div className='container'>
                    <div className='wrapper'>
                        <div className='menu-links'>
                            <nav>
                                <ul>
                                    <li>
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line1 = el)}
                                            href='/opportunities'>
                                            Opportunities
                                        </Link>
                                    </li>
                                    <li>
                                        <Link

                                            href='/solutions'><a onMouseEnter={e => handleHover(e)}
                                                onMouseOut={e => handleHoverExit(e)}
                                                ref={el => (line2 = el)}>
                                                Solutions
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line3 = el)}
                                            href='/contact-us'>
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div ref={el => (info = el)} className='info'>
                                <h3>Our Promise</h3>
                                <p>
                                    The passage experienced a surge in popularity during the 1960s
                                    when Letraset used it on their dry-transfer sheets, and again
                                    during the 90s as desktop publishers bundled the text with
                                    their software.
                                </p>
                            </div>
                            <div className='locations'>
                                Locations:
                                {/* Returning the list of cities */}
                                {cities.map(el => (
                                    <span
                                        key={el.name}
                                        onMouseEnter={() => handleCity(el.image, cityBackground)}
                                        onMouseOut={() => handleCityReturn(cityBackground)}>
                                        {el.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hamburger;