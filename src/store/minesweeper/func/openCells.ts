import { CellType } from "../../../type/types";

export const openCells = (cells: CellType[][]) => {
  cells.forEach((row) =>
    row.forEach((cell) => {
      cell.isClicked = true;
    })
  );
};
