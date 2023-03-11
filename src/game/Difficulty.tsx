import { useDispatch } from "react-redux";
import { setDifficulty } from "../store/minesweeper/mineSweeperSlice";
import { DifficultyType } from "../type/types";

const Difficulty = () => {
  const dispatch = useDispatch();

  const difficultyLevel: DifficultyType[] = ["easy", "normal", "hard"];

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const selectedLevel = target.innerHTML as DifficultyType;
    dispatch(setDifficulty(selectedLevel));
  };

  return (
    <div>
      {difficultyLevel.map((level) => (
        <button key={level} onClick={buttonHandler}></button>
      ))}
    </div>
  );
};

export default Difficulty;
