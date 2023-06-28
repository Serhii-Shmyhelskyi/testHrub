import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [
    {
      title: "Який вид відпочинку ви цінуєте?",
      variants: ["Активний", "Вечірка", "Прогулянка містом", "Дома з книгою"],
    },
    {
      title: "Яку музику ви любите слухати?",
      variants: ["Рок", "Поп", "Класика", "Все"],
    },
    {
      title: "Як ви оберете сховатися від дощу?",
      variants: ["Під деревом", "Під парасолькою", "Під плащем", "Не ховатися"],
    },
    {
      title: "Які фрукти ви любите?",
      variants: ["Полуниця", "Яблуко", "Груша", "Виноград "],
    },
    {
      title: "Які солодощі ви любите?",
      variants: ["Випічка", "Мармелад", "Шоколад", "Солодка вата"],
    },
    {
      title: "Ваш улюблений оперний співак?",
      variants: [
        "Самвел Адамян",
        "Лучано Паваротті",
        "Володимир Гришко",
        "Соломія Крушельницька ",
      ],
    },
    {
      title: "Ваше улюблене місце в потязі?",
      variants: [
        "В вагоні ресторані",
        "В купе на верхній ",
        "В кабіні машиніста",
        "В плацкарті на нижній",
      ],
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