import { LevelType } from "../../../type/types";

export const getLevelValues = (level: LevelType) => {
  const EASY_level: [number, number, number] = [8, 8, 10];
  const NORMAL_level: [number, number, number] = [16, 16, 40];
  const HARD_level: [number, number, number] = [16, 32, 99];

  //세가지 난이도가 아닌 다른 값이 들어올 경우의 수는 Customize에서 생성된 [행, 열, 마인 수]인 경우이므로
  //해당 값을 그대로 return해준다.

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
