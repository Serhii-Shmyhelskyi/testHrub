import React, { useState } from "react";

import styles from "./question.module.scss";
import { useSelector } from "react-redux";
import Game from "../Game";
import { Result } from "../Resalt/Result";
import { questions } from "../data/allData";

const Questions = () => {
  const step = useSelector((state) => state.question.step);
  return <div>{step != questions.length ? <Game /> : <Result />}</div>;
};

export default Questions;
