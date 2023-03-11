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

      //난이도에 따른 보드판 생성
      const cells: CellType[][] = [];
      for (let row = 0; row < rows; row++) {
        cells[row] = [];
        for (let col = 0; col < cols; col++) {
          cells[row][col] = {
            row,
            col,
            isClicked: false,
            isMine: false,
          };
        }
      }

      //보드판에 마인 심기
      let plantMines = mines;
      while (plantMines > 0) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);
        if (!cells[row][col].isMine) {
          cells[row][col].isMine = true;
          plantMines--;
        }
      }

      state.cells = cells;
    },

    clickCell: (state, action: PayloadAction<CellType>) => {
      const { row, col } = action.payload;
      const clickedCell = state.cells[row][col];

      if (clickedCell.isClicked) return;

      clickedCell.isClicked = true;
    },
  },
});

export const { setDifficulty, makeBoard, clickCell } = mineSweeperSlice.actions;

export default mineSweeperSlice.reducer;
