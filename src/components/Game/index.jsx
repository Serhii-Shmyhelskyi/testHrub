import React from "react";
import styles from "../../components/Game/game.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setPlusStep, setPlusValue } from "../Redux/slices/questionSlice";

const Game = () => {
  const questions = useSelector((state) => state.question.item);
  const step = useSelector((state) => state.question.step);
  const dispatch = useDispatch();
  const question = questions[step];
  const percent = Math.round((step / questions.length) * 100);

  const onClickVariant = (index) => {
    dispatch(setPlusValue(index));
    dispatch(setPlusStep(1));
  };
  return (
    <div className={styles.game_wrapper}>
      <div className={styles.wrapper_progress}>
        <div style={{ width: `${percent}%` }} className={styles.progress}></div>
      </div>
      <h2>{question.title}</h2>
      <ul>
        {question.variants.map((obj, index) => {
          return (
            <li onClick={() => onClickVariant(index)} key={index}>
              {obj}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Game;
