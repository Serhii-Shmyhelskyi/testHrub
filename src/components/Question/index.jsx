import React, { useState } from "react";

import styles from "../../components/Question/question.module.scss";
import { useSelector } from "react-redux";
import Game from "../Game";
import { Result } from "../Resalt/Result";

const Questions = () => {
  const questions = useSelector((state) => state.question.item);
  const step = useSelector((state) => state.question.step);
  return <div>{step != questions.length ? <Game /> : <Result />}</div>;
};

export default Questions;
