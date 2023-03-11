import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DifficultyType } from "../../type/types";
import { getDifficultyValues } from "./getDifficulty";
import { CellType } from "../../type/types";
export interface mineSweeperState {
  difficulty: DifficultyType;
  cells: CellType[][];
}

const initialState: mineSweeperState = {
  difficulty: "easy",
  cells: [],
};

export const mineSweeperSlice = createSlice({
  name: "mineSweeper",
  initialState,
  reducers: {
    setDifficulty: (state, action: PayloadAction<DifficultyType>) => {
      state.difficulty = action.payload;
    },

    makeBoard: (state) => {
      const [rows, cols, mines] = getDifficultyValues(state.difficulty);
      const cells = [];
      for (let row = 0; row < rows; row++) {
        cells[row] = [];
        for (let col = 0; col < cols; col++) {
          cells[row][col] = {
            row,
            col,
          };
        }
      }

      state.cells = cells;
    },
  },
});

export const { setDifficulty, makeBoard } = mineSweeperSlice.actions;

export default mineSweeperSlice.reducer;
