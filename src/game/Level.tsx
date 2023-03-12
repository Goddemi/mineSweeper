import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLevel } from "../store/minesweeper/mineSweeperSlice";
import { LevelType } from "../type/types";
import Customize from "./Customize";

const Level = () => {
  const dispatch = useDispatch();
  const [custom, setCustom] = useState(false);

  const difficultyLevel = ["easy", "normal", "hard"];

  const customHandler = () => {
    setCustom((prevState) => !prevState);
  };

  // [easy, normal, hard] 중 유저가 선택한 난이도 레벨을 변수에 세팅해준다.
  // 이 때 커스텀세팅을 선택할 경우 별도의 행, 열, 마인 숫자를 입력할 수 있는 Cutomize 컴포넌트가 보여지게 한다.
  const levelHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const selectedLevel = target.innerHTML as LevelType;
    dispatch(setLevel(selectedLevel));
  };

  return (
    <>
      <div>
        {difficultyLevel.map((level) => (
          <button
            key={level}
            onClick={levelHandler}
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

export default Level;
