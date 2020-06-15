import React, {createContext, useState, useEffect} from 'react';

const defaultState = {
    sharedCount: 0
};

export const WormholeContext = createContext({
    state: defaultState,
    dispatch: () => {}
});

export const WormholeContextProvider = (props) => {
    const [state, setState] = useState(defaultState);
    const [contextValue, setContextValue] = useState({
        state,
        setSharedCount: sharedCount =>
            setState(currentState=>({
                ...currentState,
                sharedCount
            }))
    });

    useEffect(()=>{
        setContextValue(contextValue=> ({
            contextValue,
            state,
        }))
    }, [state]);

    return (
        <WormholeContext.Provider value={contextValue}>
            {props.children}
        </WormholeContext.Provider>
    );
};