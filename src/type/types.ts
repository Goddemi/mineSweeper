export type DifficultyType = "easy" | "normal" | "hard" | number[];

export interface CellType {
  row: number;
  col: number;
  isClicked: boolean;
  isMine: boolean;
  nearMineCounter: number;
}
