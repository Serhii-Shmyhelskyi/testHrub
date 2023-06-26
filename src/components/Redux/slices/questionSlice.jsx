import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [
    {
      title: "Ви любите гриби?",
      variants: ["Так", "Ні", "Звичайно", "Не знаю"],
      correct: 0,
    },
    {
      title: "Чи ви збираэте гриби?",
      variants: ["Так", "Ні", "Звичайно", "Не знаю"],
      correct: 0,
    },
    {
      title: "Можете з'їсти сирий гриб?",
      variants: ["Так", "Ні", "Звичайно", "Не знаю"],
      correct: 0,
    },
    {
      title: "Можете зварити грибну юшку?",
      variants: ["Так", "Ні", "Звичайно", "Не знаю"],
      correct: 0,
    },
  ],
  step: 0,
  value: 0,
};
export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setPlusStep: (state, action) => {
      state.step += action.payload;
    },
    setPlusValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { setPlusStep, setPlusValue } = questionSlice.actions;

export default questionSlice.reducer;
