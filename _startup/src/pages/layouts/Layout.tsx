import React, { FC } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

interface Props {}
export const Layout: FC<Props> = (props) => {
  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header">This is a header.</header>
      <body>{props.children}</body>
    </div>
  );
};
