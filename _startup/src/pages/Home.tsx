import React, { FC } from "react";
import styled from "styled-components";
import lightGreen from "@material-ui/core/colors/lightGreen";

interface Props {}
export const Home: FC<Props> = (props) => {
  return <StyledLayout>Home</StyledLayout>;
};

const StyledLayout = styled.div`
  background-color: ${lightGreen[50]};
  display: block;
  width: 100%;
`;
