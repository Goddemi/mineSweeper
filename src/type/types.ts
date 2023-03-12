export type GameStateType = "lose" | "inPlaying" | "win";

export type LevelType = "easy" | "normal" | "hard" | number[];

export interface CellType {
  row: number;
  col: number;
  isClicked: boolean;
  isMine: boolean;
  nearMineCounter: number;
}

export interface MineSweeperType {
  level: LevelType;
  cells: CellType[][];
  gameState: GameStateType;
}
