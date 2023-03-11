import { DifficultyType } from "../../../type/types";

export const getDifficultyLevelValues = (difficulty: DifficultyType) => {
  const EASY_DIFFICULTY: [number, number, number] = [8, 8, 10];
  const NORMAL_DIFFICULTY: [number, number, number] = [16, 16, 40];
  const HARD_DIFFICULTY: [number, number, number] = [16, 32, 99];

  switch (difficulty) {
    case "easy":
      return EASY_DIFFICULTY;
    case "normal":
      return NORMAL_DIFFICULTY;
    case "hard":
      return HARD_DIFFICULTY;
    default:
      return difficulty;
  }
};
