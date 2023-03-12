import { LevelType } from "../../../type/types";

export const getLevelValues = (level: LevelType) => {
  const EASY_level: [number, number, number] = [8, 8, 10];
  const NORMAL_level: [number, number, number] = [16, 16, 40];
  const HARD_level: [number, number, number] = [16, 32, 99];

  switch (level) {
    case "easy":
      return EASY_level;
    case "normal":
      return NORMAL_level;
    case "hard":
      return HARD_level;
    default:
      return level;
  }
};
