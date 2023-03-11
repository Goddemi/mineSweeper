import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DifficultyType } from "../../type/types";

export interface mineSweeperState {
  difficulty: DifficultyType;
}

const initialState: mineSweeperState = {
  difficulty: "easy",
};

export const mineSweeperSlice = createSlice({
  name: "mineSweeper",
  initialState,
  reducers: {
    setDifficulty: (state, action: PayloadAction<DifficultyType>) => {
      state.difficulty = action.payload;
    },
  },
});

export const { setDifficulty } = mineSweeperSlice.actions;

export default mineSweeperSlice.reducer;
