import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
});

export const testReducer = testSlice.reducer;
