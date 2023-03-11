import { configureStore } from "@reduxjs/toolkit";
import mineSweeperReducer from "./minesweeper/mineSweeperSlice";

export const store = configureStore({
  reducer: {
    mineSweeper: mineSweeperReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
