import React from "react";

import "./App.scss";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <h1>Грибний тест</h1>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default App;
