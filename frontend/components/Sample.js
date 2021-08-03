import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

// import {
//   Link,
//   withRouter,
// } from 'react-router-dom';
import Hamburger from './Humbager';

const Header = ({ history }) => {
    const router = useRouter()
    // State of our Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    });
    // State of our button
    const [disabled, setDisabled] = useState(false);

    // //Use Effect
    // useEffect(() => {
    //     console.log(router.query)
    //     //Listening for page changes.
    //     // history.listen(() => {
    //     //     setState({ clicked: false, menuName: "Menu" });
    //     // });
    // }, [history]);

    // Toggle menu
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            });
        }
    };

    //Determine if out menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };

    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="inner-header">
                        <div className="logo">
                            <Link href="/">HAMBRG.</Link>
                        </div>
                        <div className="menu">
                            <button disabled={disabled} onClick={handleMenu}>
                                {state.menuName}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Hamburger state={state} />
        </header>
    );
};

export default Header;
