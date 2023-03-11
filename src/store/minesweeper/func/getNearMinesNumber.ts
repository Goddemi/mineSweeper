import { CellType } from "../../../type/types";

export const getNearMinesNumber = (
  cells: CellType[][],
  row: number,
  col: number
) => {
  const rows = cells.length;
  const cols = cells[0].length;

  let mineCouter = 0;
  for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, rows - 1); i++) {
    for (let j = Math.max(col - 1, 0); j <= Math.min(col + 1, cols - 1); j++) {
      if (i === row && j === col) continue;
      if (cells[i][j].isMine) mineCouter++;
    }
  }
  return mineCouter;
};
