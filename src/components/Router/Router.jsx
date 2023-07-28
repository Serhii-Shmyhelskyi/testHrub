import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import Start from "../Start/Start";
import Questions from "../Questions";
import { Result } from "../Resalt/Result";
import ErrorComponent from "../ErrorComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    // testHrub
    element: <App />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: "question",
        element: <Questions />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "*",
        element: <ErrorComponent />,
      },
    ],
  },
]);
