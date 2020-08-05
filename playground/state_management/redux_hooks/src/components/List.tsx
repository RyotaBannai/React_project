import React, { FC, useRef, useEffect, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCountAction } from "../store/actions/countActions";
import {
  Button,
  Grid,
  Icon,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import styled from "styled-components";

const countSelector = (state: Count.CounterState) => state.count;

interface Props {
  items: Movie.MovieType[];
  handleClick: (index: number) => void;
  addMovie: (movie: Movie.MovieType) => void;
}
const _List: FC<Props> = ({ items, handleClick, addMovie }) => {
  const { increment, decrement } = useCountAction();
  const dispatch = useDispatch();
  const counter = useSelector(countSelector);

  const refInput = useRef(null);
  const map = (item: Movie.MovieType, index: number) => (
    <div onClick={() => handleClick(index)}>{item.data.title}</div>
  );

  const addMovieHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (refInput === null || refInput.current === null) return;
    addMovie({
      id: 3,
      data: {
        title:
          ((refInput?.current as unknown) as HTMLElement).querySelector("input")
            ?.value || "",
      },
    });
  };
  useEffect(() => {
    // do something
  }, []);

  return (
    <>
      <StyledGridParent container direction="column" spacing={1}>
        <Grid item>{items.map(map)}</Grid>
        <Grid item>
          <InputLabel htmlFor="data">Set Name</InputLabel>
          <OutlinedInput id="data" required ref={refInput} />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            disableRipple
            disableTouchRipple
            onClick={addMovieHandler}
          >
            Add New Movie
          </Button>
        </Grid>
        <Grid item>
          count:{counter}
          <Button
            variant="contained"
            disableRipple
            disableTouchRipple
            onClick={() => dispatch(increment())}
          >
            Count
          </Button>
        </Grid>
      </StyledGridParent>
    </>
  );
};

export const List = React.memo(_List);

const StyledGridParent = styled(Grid)`
  padding: 10px;
`;
