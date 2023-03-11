import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDifficulty } from "../store/minesweeper/mineSweeperSlice";
import { DifficultyType } from "../type/types";
import Customize from "./Customize";

const Difficulty = () => {
  const dispatch = useDispatch();
  const [custom, setCustom] = useState(false);

  const difficultyLevel = ["easy", "normal", "hard"];

  const customHandler = () => {
    setCustom((prevState) => !prevState);
  };

  const difficultyHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const selectedLevel = target.innerHTML as DifficultyType;
    dispatch(setDifficulty(selectedLevel));
  };

  return (
    <>
      <div>
        {difficultyLevel.map((level) => (
          <button
            key={level}
            onClick={difficultyHandler}
            className="mx-2 p-3 bg-slate-400 text-white rounded-md cursor-pointer"
          >
            {level}
          </button>
        ))}
        <button
          onClick={customHandler}
          className="mx-2 p-3 bg-slate-400 text-white rounded-md cursor-pointer"
        >
          custom
        </button>
      </div>
      {custom && <Customize />}
    </>
  );
};

export default Difficulty;
