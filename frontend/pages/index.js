import React, {
  useEffect,
  useRef,
} from 'react';

import Head from 'next/head';

import { handlePanelAnimation } from '../components/Animation';
import useWindowSize from '../components/Hoc/useWindowsSize.jsx';
import HomeFeatured from '../components/Home/HomeFeatured';
import HomeFooter from '../components/Home/HomeFooter';
import HomeHeader from '../components/Home/HomeHeader';
import HomeNews from '../components/Home/HomeNews';
import { HomeQuote } from '../components/Home/HomeQuote';
import HomeShop from '../components/Home/HomeShop';
import HomeSub from '../components/Home/HomeSub';

const home = () => {
  //Hooc to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };


  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);
 
  useEffect(()=> {
    handlePanelAnimation().play
  }, [])

  useEffect(() => {
    setBodyHeight();
    console.log(size.height)
  }, [size.height]);


  const setBodyHeight = () => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height
      }px`;
  };


  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;


    requestAnimationFrame(() => skewScrolling());
  };
  return (
    <div ref={app}>
      <Head>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.jqueryFile }}></script>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />

        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.bannerFile }}></script>
        <title>BasFrontEnd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={scrollContainer}>
        <HomeHeader />
        <HomeFeatured />
        <HomeNews />
        <HomeShop />
        <HomeSub />
        <HomeQuote />
      </main>

      <footer>
        <HomeFooter />
      </footer>



    </div>
  )
}

export default home


