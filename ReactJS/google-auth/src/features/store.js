import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
const store = configureStore({
  reducer: {
    feedbacks: AuthSlice,
  },
});
export default store;
