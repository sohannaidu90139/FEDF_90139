import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "../features/feedbackSlice.js";

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});
