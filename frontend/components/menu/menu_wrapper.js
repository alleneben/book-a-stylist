import {
  useContext,
  useEffect,
} from 'react';

import {
  handle2ndEntranceAnimtion,
  handleExitAnimation,
} from '../Animation';
import Banner from '../Banner';
import Navbar from '../Header';
import HomePopularSearch from '../Home/HomePopularSearch';
import HomeRecommended from '../Home/HomeRecommended';
import HowItWorks from '../Howitworks';
import { menuContext } from '../menu/menu_context';
import TestSample from '../test';
import Testimonial from '../testimonal';

const MenuWrapper = ({ children }) => {
  const { menuState, setMenuState } = useContext(menuContext);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (menuState === true) {
      console.log(menuState);
      handle2ndEntranceAnimtion().restart();
    } else {
      handleExitAnimation().restart();
    }
  }, [menuState]);
  return (
    <>
      <TestSample />
      <div className="background bubules">
        <Bubble />
        <Navbar />
        <Banner />
      </div>
      <HomeRecommended />
      <HowItWorks />
      <HomePopularSearch/>
      <Testimonial />
    </>
  );
};

export default MenuWrapper;

const Bubble = () => {
  return (
    <ul className="bubulescircles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};
