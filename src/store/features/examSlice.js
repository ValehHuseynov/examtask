import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
};

const examSlice = createSlice({
  initialState,
  name: "exam",
  reducers: {},
});

const reducer = examSlice.reducer;
export const { create } = examSlice.actions;
export default reducer;
