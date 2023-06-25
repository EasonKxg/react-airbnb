import React from "react";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import("pages/Home"));
const Detail = React.lazy(() => import("pages/Detail"));
const Entire = React.lazy(() => import("pages/Entire"));
const NotFound = React.lazy(() => import("pages/NotFound"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
