import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
