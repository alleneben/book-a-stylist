import React, { createContext, useContext, useReducer} from 'react';


const AppContext = createContext();

const initialstate = {
    loading: true
};

const reducer = (state, action) => {

    switch (action.type) {

        case 'FINISHED_LOADING':
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case 'ERROR':
            return {
                error: action.error
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialstate);


    return(
        <AppContext.Provider value={{state, dispatch}}>
        { children }
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;