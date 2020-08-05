import React, { FC, useRef, useEffect, SyntheticEvent } from "react";
import { MovieType } from "../types/Movie";
import {
  Button,
  Grid,
  Icon,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import styled from "styled-components";

interface Props {
  items: MovieType[];
  handleClick: (index: number) => void;
  addMovie: (movie: MovieType) => void;
}
const _List: FC<Props> = ({ items, handleClick, addMovie }) => {
  const refInput = useRef(null);
  const map = (item: MovieType, index: number) => (
    <div onClick={() => handleClick(index)}>{item.data.title}</div>
  );
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
            onClick={(e: SyntheticEvent) => {
              e.preventDefault();
              if (refInput === null || refInput.current === null) return;
              addMovie({
                id: 3,
                data: {
                  title:
                    ((refInput?.current as unknown) as HTMLElement).querySelector(
                      "input"
                    )?.value || "",
                },
              });
            }}
          >
            Add New Movie
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
