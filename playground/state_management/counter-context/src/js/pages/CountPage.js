import React, {useState, useEffect, useContext} from "react";
import {
    WormholeContextProvider,
    WormholeContext,
} from '../WormholeContextProvider'

const Display = ({count}) => {
    return (
        <p>{count}</p>
    )
};

const RedButton = ({setState}) => {
    return (
        <button onClick={setState}>+1</button>
    )
};
const Counter = ({start = 0}) => {
    const {state, setSharedCount} = useContext(WormholeContext);
    // let plusOne = _ => setCount(count+1); // what difference.
    let plusOne = _ => setSharedCount(state.sharedCount+1);
    return (<div>
        <label>
            <Display count={state.sharedCount} />
            <RedButton setState={plusOne}/>
        </label>
    </div>)
};


export const CounterPage = props => {
    return (<div>
        <WormholeContextProvider>
            <Counter/>
            <Counter/>
        </WormholeContextProvider>
    </div>)
};


