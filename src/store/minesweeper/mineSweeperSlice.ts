import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getLevelValues } from "./func/getLevelValues";
import { getNearMinesNumber } from "./func/getNearMinesNumber";
import { openAllCells } from "./func/openAllCells";
import { openNearCells } from "./func/openNearCells";
import { checkWin } from "./func/checkWin";
import { CellType } from "../../type/types";
import { LevelType, MineSweeperType } from "../../type/types";

const initialState: MineSweeperType = {
  level: "easy",
  cells: [],
  gameState: "inPlaying",
};

export const mineSweeperSlice = createSlice({
  name: "mineSweeper",
  initialState,
  reducers: {
    //유저가 선택한 난이도를 state에 지정해준다.
    setLevel: (state, action: PayloadAction<LevelType>) => {
      state.level = action.payload;
    },

    //난이도 state에 따른 보드를 생성하고 각 셀에 랜덤으로 지뢰를 심어준다.
    //각 셀 주변에 지뢰가 있다면 그 개수를 stat가 미리 포함하게 한다.
    makeBoard: (state) => {
      state.gameState = "inPlaying";

      const [rows, cols, mines] = getLevelValues(state.level);

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

      //셀에 지뢰 랜덤으로 심기
      let plantMines = mines;
      while (plantMines > 0) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);
        if (!cells[row][col].isMine) {
          cells[row][col].isMine = true;
          plantMines--;
        }
      }

      //셀에 주변 지뢰 개수 입력해두기
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const cell = cells[row][col];
          if (cell.isMine) continue;
          cell.nearMineCounter = getNearMinesNumber(cells, row, col);
        }
      }

      state.cells = cells;
    },

    //유저가 셀을 클릭했을 때 각 셀이 해야하는 행동들
    clickCell: (state, action: PayloadAction<CellType>) => {
      const { row, col } = action.payload;
      const clickedCell = state.cells[row][col];
      if (clickedCell.isClicked) return;

      clickedCell.isClicked = true;

      //클릭한 셀에 지뢰가 있다면 게임상태를 '패배'로 바꾸고 모든 셀들을 클릭된 상태로 변경한다.
      //지뢰가 없다면 주변 셀들의 주변에 지뢰가 있는지 파악하고 재귀함수를 통해 과정을 이어나간다.
      if (clickedCell.isMine) {
        state.gameState = "lose";
        openAllCells(state.cells);
        alert("you click mine. Game over");
      } else if (clickedCell.nearMineCounter === 0) {
        openNearCells(state.cells, row, col);
      }

      //모든 셀의 수에서 지뢰의 수를 뺀 값과, 클릭된 셀의 수가 같다면 게임 상태를 win으로 바꾼다.
      checkWin(state);
    },

    resetGame: (state) => {
      state.cells.forEach((row) =>
        row.forEach((cell) => {
          cell.isClicked = false;
        })
      );
      state.gameState = "inPlaying";
    },
  },
});

export const { setLevel, makeBoard, clickCell, resetGame } =
  mineSweeperSlice.actions;

export default mineSweeperSlice.reducer;
