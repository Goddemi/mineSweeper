import { getLevelValues } from "./getLevelValues";
import { MineSweeperType } from "../../../type/types";

export const checkWin = (state: MineSweeperType) => {
  const { cells } = state;
  const [rows, cols, mines] = getLevelValues(state.level);

  const cellsNumberExceptMines = rows * cols - mines;

  let clickedCellsNumber = 0;
  cells.forEach((row) =>
    row.forEach((cell) => {
      if (cell.isClicked) clickedCellsNumber++;
    })
  );

  if (cellsNumberExceptMines === clickedCellsNumber) {
    state.gameState = "win";
  }
};
