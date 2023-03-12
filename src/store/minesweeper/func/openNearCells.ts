import { CellType } from "../../../type/types";

export const openNearCells = (
  cells: CellType[][],
  row: number,
  col: number
) => {
  const rows = cells.length;
  const cols = cells[0].length;

  for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, rows - 1); i++) {
    for (let j = Math.max(col - 1, 0); j <= Math.min(col + 1, cols - 1); j++) {
      const cell = cells[i][j];
      if (!cell.isClicked && !cell.isMine) {
        cell.isClicked = true;

        //재귀함수를 통해 주변 셀들이 클릭되게 구성
        if (cell.nearMineCounter === 0) openNearCells(cells, i, j);
      }
    }
  }
};
