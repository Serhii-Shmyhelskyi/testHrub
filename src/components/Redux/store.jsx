import { configureStore } from "@reduxjs/toolkit";

import questionReducer from "../Redux/slices/questionSlice";

export const store = configureStore({
  reducer: {
    question: questionReducer,
  },
});
