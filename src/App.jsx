import React from "react";

import "./App.scss";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Грибний тест</h1>
      <Outlet></Outlet>
    </>
  );
};

export default App;
