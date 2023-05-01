import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

const App = memo(() => {
  return (
    <>
      <AppHeader />
        <div>{useRoutes(routes)}</div>
      <AppFooter />
    </>
  );
});

export default App;
