import {
  createContext,
  useState,
} from 'react';

export const menuContext = createContext();




export const MenuProvider = ({ children }) => {
    const [menuState, setMenuState] = useState(false);
    return (
        <menuContext.Provider value={{ menuState, setMenuState }}>
            {children}
        </menuContext.Provider>
    )
}


