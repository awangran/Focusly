import * as React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Home";
import Form from "./Form";
import Error from "./Error"

export default function App() {
  const router = useRoutes([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "start",
      element: <Form />,
    },
  ]);
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(router, { key: location.pathname })}
    </AnimatePresence>
  );
};