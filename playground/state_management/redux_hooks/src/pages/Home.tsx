import React, { FC, useCallback, useRef, useEffect, useState } from "react";
import { List } from "../components/List";
import styled from "styled-components";
import lightGreen from "@material-ui/core/colors/lightGreen";

interface Props {}
export const Home: FC<Props> = (props) => {
  const [term, setTerm] = useState<string>("sf");
  //   const items = useSearch(term);
  const [movies, setMovies] = useState(items);
  const addMovie = (movie: Movie.MovieType) => setMovies([...movies, movie]);
  const handleClick = useCallback(
    (item) => {
      console.log(movies);
      console.log("You clicked ", item);
    },
    [movies]
  );
  useEffect(() => {
    // do something
  }, [movies]);
  return (
    <StyledLayout>
      <List items={movies} handleClick={handleClick} addMovie={addMovie} />
    </StyledLayout>
  );
};

const items: Movie.MovieType[] = [
  {
    id: 0,
    data: {
      title: "harry potter",
    },
  },
  {
    id: 1,
    data: {
      title: "lord of the rings",
    },
  },
];

const StyledLayout = styled.div`
  background-color: ${lightGreen[50]};
  display: block;
  width: 100%;
`;

// function useStateWithPromise(initialState: any) {
//   const [state, setState] = useState(initialState);
//   const resolverRef = useRef<any>(null);

//   useEffect(() => {
//     if (resolverRef) {
//       if (typeof resolverRef.current === "function") resolverRef.current(state);
//       resolverRef.current = null;
//     }
//   }, [resolverRef.current, state]);

//   const handleSetState = useCallback(
//     (stateAction) => {
//       setState(stateAction);
//       return new Promise((resolve) => {
//         resolverRef.current = resolve;
//       });
//     },
//     [setState]
//   );

//   return [state, handleSetState];
// }
