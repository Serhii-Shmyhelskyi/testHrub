import React from "react";
import { Link } from "react-router-dom";

export const Start = () => {
  return (
    <>
      <h1>Грибний тест</h1>
      <div className="start">
        <Link to="question">
          <button className="button">Почнемо</button>
        </Link>
      </div>
    </>
  );
};

export default Start;
