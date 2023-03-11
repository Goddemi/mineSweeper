export type DifficultyType = "easy" | "normal" | "hard";

export interface CellType {
  row: number;
  col: number;
  isClicked: boolean;
  isMine: boolean;
}
