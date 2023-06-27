import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import Start from "../Start/Start";
import Questions from "../Question";
import { Result } from "../Resalt/Result";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "",
    // testHrub
    element: <App />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: "/question",
        element: <Questions />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
