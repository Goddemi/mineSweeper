import { CellType } from "../../../type/types";

export const openAllCells = (cells: CellType[][]) => {
  cells.forEach((row) =>
    row.forEach((cell) => {
      cell.isClicked = true;
    })
  );
};
