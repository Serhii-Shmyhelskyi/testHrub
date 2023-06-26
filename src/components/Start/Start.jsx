import React from "react";
import { Link } from "react-router-dom";

export const Start = () => {
  return (
    <div className="start">
      <Link to="question">
        <button className="button">Почнемо</button>
      </Link>
    </div>
  );
};

export default Start;
