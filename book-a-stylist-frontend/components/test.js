import { useContext } from 'react';

import { CgClose } from 'react-icons/cg';

import { menuContext } from './menu/menu_context';

const TestSample = () => {

    return (
        < >
            <div className="test">
                <HomeTest />

            </div>
        </ >
    )
}

export default TestSample


const HomeTest = () => {
    const { menuState, setMenuState } = useContext(menuContext);


    return (
        <div className="mega__menu">
            <div className='menu__close__div' onClick={() => setMenuState(!menuState)}>
                <CgClose size={30} className="menu__close" color="black" />
            </div>
            <ul className="menu_list">
                <li className="menu_list_item">
                    <a href="#" className="menu_list_link">Home</a>
                </li>
                <li className="menu_list_item">
                    <a href="#" className="menu_list_link">About</a>
                </li>
                <li className="menu_list_item">
                    <a href="#" className="menu_list_link">Help</a>
                </li>
                <li className="menu_list_item">
                    <a href="#" className="menu_list_link">Contact</a>
                </li>
            </ul>
            <div>
                <button className="menu_trigger btnOpenMenu">HAIRCUT</button>
                <button className="menu_trigger btnOpenMenu">NAIL</button>
                <button className="menu_trigger btnOpenMenu">EYELASHES</button>
                <button className="menu_trigger btnOpenMenu">FACIAL</button>
                <button className="menu_trigger btnOpenMenu">WEAVES</button>
            </div>
        </div >
    )
}