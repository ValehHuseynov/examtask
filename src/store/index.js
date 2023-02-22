import { configureStore } from "@reduxjs/toolkit";
import examReducer from "./features/examSlice";
import { examApi } from "./api/examApi";

const reducer = {
  [examApi.reducerPath]: examApi.reducer,
  examReducer: examReducer,
};
const middleware = [examApi.middleware];

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV === "development",
});

export default store;
