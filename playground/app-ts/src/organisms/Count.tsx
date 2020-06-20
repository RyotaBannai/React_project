import React, {useState, useEffect, useRef, useReducer, SyntheticEvent} from "react";
import Button from "react-bootstrap/Button";
// import { fromEvent } from 'rxjs';
// import { find } from 'rxjs/operators';

interface Props {
  message: string;
}

interface Result {
  count: number;
}

const Display: React.FC<Result> = ({ count }) => {
  return <div>{count}</div>;
};

// const click$ = fromEvent(document, 'click');
// const button = click$.pipe(find(event => event.target.id === '_button'));
// button.subscribe(x => clicked(x));

export const Count: React.FC<Props> = ({ message }) => {
    const [count, setCount] = useState<number>(0);

    // const inputRef = useRef<HTMLInputElement | null>(null);
    const increase = (event: SyntheticEvent): void =>  {
        setCount(currentCount => currentCount + 1);
    };
  return (
    <div>
      <h2>{message}</h2>
      <Display count={count} />
      <Button id="_button" onClick={ increase }> Press to add +1 </Button>
      {/*<input ref={inputRef}></input>*/}
    </div>
  );
};
