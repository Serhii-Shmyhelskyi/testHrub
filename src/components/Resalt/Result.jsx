import React from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPlusStep } from "../Redux/slices/questionSlice";
import { result } from "../data/allData";

export const Result = () => {
  const step = useSelector((state) => state.question.step);
  const value = useSelector((state) => state.question.value);
  const dispatch = useDispatch();
  return (
    <div className="result">
      <h2>Який ти їстивний гриб?</h2>
      <div className="result_final">
        {value < 5 ? (
          <div>
            <div>{result[0].text}</div>
            <img className="result_finalImg" src={result[0].img} alt="Маслюк" />
          </div>
        ) : value < 8 ? (
          <div>
            <div>{result[1].text}</div>
            <img
              className="result_finalImg"
              src={result[1].img}
              alt="Маслюк зернистий"
            />
          </div>
        ) : value < 12 ? (
          <div>
            <div>{result[2].text}</div>
            <img className="result_finalImg" src={result[2].img} alt="Білий" />
          </div>
        ) : value < 18 ? (
          <div>
            <div>{result[3].text}</div>
            <img
              className="result_finalImg"
              src={result[3].img}
              alt="Сироїжка"
            />
          </div>
        ) : value < 22 ? (
          <div>
            <div>{result[4].text}</div>
            <img
              className="result_finalImg"
              src={result[4].img}
              alt="Підвишень"
            />
          </div>
        ) : (
          <div>
            <div>{result[5].text}</div>
            <img
              className="result_finalImg"
              src={result[5].img}
              alt="Печериця садова"
            />
          </div>
        )}
      </div>
      <Link to="/testHrub/">
        <button className="button" onClick={dispatch(setPlusStep(step * 0))}>
          Рестарт
        </button>
      </Link>
    </div>
  );
};
