import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DifficultyType } from "../../type/types";
import { getDifficultyLevelValues } from "./func/getDifficultyLevel";
import { getNearMinesNumber } from "./func/getNearMinesNumber";
import { CellType } from "../../type/types";
import { openCells } from "./func/openCells";
export interface mineSweeperState {
  difficulty: DifficultyType;
  cells: CellType[][];
  gameOver: boolean;
}

const initialState: mineSweeperState = {
  difficulty: "easy",
  cells: [],
  gameOver: false,
};

export const mineSweeperSlice = createSlice({
  name: "mineSweeper",
  initialState,
  reducers: {
    setDifficulty: (state, action: PayloadAction<DifficultyType>) => {
      state.difficulty = action.payload;
    },

    makeBoard: (state) => {
      const [rows, cols, mines] = getDifficultyLevelValues(state.difficulty);

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
            nearMineCounter: 0,
          };
        }
      }

      //셀에 마인 랜덤으로 심기
      let plantMines = mines;
      while (plantMines > 0) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);
        if (!cells[row][col].isMine) {
          cells[row][col].isMine = true;
          plantMines--;
        }
      }

      //셀에 주변 마인 개수 입력해두기
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const cell = cells[row][col];
          if (cell.isMine) continue;
          cell.nearMineCounter = getNearMinesNumber(cells, row, col);
        }
      }

      state.cells = cells;
    },

    clickCell: (state, action: PayloadAction<CellType>) => {
      const { row, col } = action.payload;
      const clickedCell = state.cells[row][col];
      if (clickedCell.isClicked) return;

      clickedCell.isClicked = true;

      if (clickedCell.isMine) {
        state.gameOver = true;
        openCells(state.cells);
        alert("you click mine. Game over");
      }
    },

    resetGame: (state) => {
      state.cells.forEach((row) =>
        row.forEach((cell) => {
          cell.isClicked = false;
        })
      );
      state.gameOver = false;
    },
  },
});

export const { setDifficulty, makeBoard, clickCell, resetGame } =
  mineSweeperSlice.actions;

export default mineSweeperSlice.reducer;
