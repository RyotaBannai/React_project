import React, {useState, useEffect, useRef, useReducer, SyntheticEvent} from "react";
import Button from "react-bootstrap/Button";
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { applyMiddleware, createStore } from "redux";
import { connect } from "react-redux";
import { createEpicMiddleware} from "redux-observable";

interface Props {
    message: string;
    count: number;
    increment: React.Dispatch<any>;
}

interface Result {
    count: number;
}

type INPUT = {
    type: 'CLICK_INCREMENT'
} | {
    type: 'CLICK_DECREMENT'
}

// type ACTION = {
//     type: 'INCREMENT',
//     amount: number
// } | {
//     type: 'DECREMENT',
//     amount: number
// }

const countEpic = (action$: any) => action$.pipe(
    filter((action: INPUT) => action.type === 'CLICK_INCREMENT'),
    map(action => {
        return ({type: 'INCREMENT', amount: 1})
    })
);

const observableMiddleware = createEpicMiddleware();
export const store = createStore(reducer, applyMiddleware(observableMiddleware));
observableMiddleware.run(countEpic);

function reducer(state: number = 0, action: any){
    console.log('Action', action);
    switch (action.type) {
        case 'INCREMENT':
            return state + action.amount;
        default:
            return state;
    }
}

// const click$ = fromEvent(document, 'click');
// const button = click$.pipe(find(event => event.target.id === '_button'));
// button.subscribe(x => clicked(x));

const Display: React.FC<Result> = ({ count }) => {
    return <div>{count}</div>;
};

const mapStateToProps = (state: number, props: any) => ({
    count: state
});

const mapDispatchToProps = (dispatch: React.Dispatch<INPUT>, props: any) => {
    return {
        increment: function (): void {
            dispatch({ type: 'CLICK_INCREMENT' })
        },
    };
};

const Count001: React.FC<Props> = ({ message, count, increment }) => {
    // const [count, setCount] = useState<number>(0);
    useEffect(()=>{ }, []);
    return (
        <div>
            <h2>{message}</h2>
            <Display count={count} />
            <Button id="_button" onClick={ () => increment('') }> Press to add +1 </Button>
            {/*<input ref={inputRef}></input>*/}
        </div>
    );
};

const count = connect(mapStateToProps, mapDispatchToProps)(Count001);
export {
    count as Count001
}
