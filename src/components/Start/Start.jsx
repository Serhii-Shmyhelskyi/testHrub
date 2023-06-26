import React from "react";
import { Link } from "react-router-dom";

export const Start = () => {
  return (
    <div className="start">
      <Link to="question">
        <input className="input_button" type="button" value="Почнім" />
      </Link>
    </div>
  );
};

export default Start;
