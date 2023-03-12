import { createSlice } from "@reduxjs/toolkit";

const initialState: { time: number } = {
  time: 0,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    timeIncrese: (state) => {
      state.time++;
    },
    timeReset: (state) => {
      state.time = 0;
    },
  },
});

export const { timeIncrese, timeReset } = timerSlice.actions;

export default timerSlice.reducer;
