import {
  useContext,
  useEffect,
} from 'react';

import {
  handle2ndEntranceAnimtion,
  handleExitAnimation,
} from '../Animation';
import AreaStylistSection from '../AreaStylistSection';
import Banner from '../Banner';
import Navbar from '../Header';
import HowItWorks from '../Howitworks';
import { menuContext } from '../menu/menu_context';
import Sponsor from '../sponsor';
import TestSample from '../test';
import Testimonial from '../testimonal';

const MenuWrapper = ({ children }) => {

    const { menuState, setMenuState } = useContext(menuContext)

    useEffect(() => {

        // If the menu is open and we click the menu button to close it.
        if (menuState === true) {
            console.log(menuState)
            handle2ndEntranceAnimtion().restart();
        } else {
            handleExitAnimation().restart();
        }
    }, [menuState]);
    return (
        <>
            <TestSample />
            <div className="background">
                <Navbar />
                <Banner />
            </div>
            <Sponsor />
            <AreaStylistSection />
            <HowItWorks />
            <AreaStylistSection />
            <Testimonial />
        </>
    )
}

export default MenuWrapper
