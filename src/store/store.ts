import { configureStore } from "@reduxjs/toolkit";
import mineSweeperReducer from "./minesweeper/mineSweeperSlice";
import timerReducer from "./timer/timerSlice";

export const store = configureStore({
  reducer: {
    mineSweeper: mineSweeperReducer,
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
