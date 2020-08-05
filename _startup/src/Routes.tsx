import React, { FC, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "./pages/layouts/Layout";
import { Home } from "./pages/Home";

interface Props {}
export const AppRoute: FC<Props> = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
        </Suspense>
      </Layout>
    </Router>
  );
};
