import React, {createContext, useState, useEffect} from 'react';

const defaultState = {
    sharedCount: 0,
    randomVal: 'string'
};
export const WormholeContext = createContext({
    state: defaultState,
    dispatch: () => {}
});
export const WormholeContextProvider = ({children}) => {
    const [state, setState] = useState(defaultState); // state = {sharedCount}
    const [contextValue, setContextValue] = useState({
        state,
        setSharedCount: sharedCount =>
            setState(currentState=>({
                ...currentState,
                sharedCount
            }))
    });
    useEffect(() => {
        setContextValue(contextValue=> ({
            ...contextValue,
            state,
        }));
        console.log(contextValue);
    }, [state]);

    return (
        <WormholeContext.Provider value={contextValue}>
            {children}
        </WormholeContext.Provider>
    );
};