import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Gift, Sad, Smile } from "../icon/Icons";
import { makeBoard, resetGame } from "../store/minesweeper/mineSweeperSlice";
import { RootState } from "../store/store";
import { timeReset } from "../store/timer/timerSlice";
import Cell from "./Cell";

const GameBoard = () => {
  const dispatch = useDispatch();
  const difficultyLevel = useSelector(
    (state: RootState) => state.mineSweeper.level
  );
  const gameState = useSelector(
    (state: RootState) => state.mineSweeper.gameState
  );
  const cells = useSelector((state: RootState) => state.mineSweeper.cells);
  const [initialClick, setInitialClick] = useState(true);

  //중간의 이모지를 클릭했을 때 게임을 초기화 시키는 기능
  const resetHandler = () => {
    dispatch(timeReset());
    dispatch(resetGame());
  };

  useEffect(() => {
    setInitialClick(true);
    dispatch(makeBoard());
  }, [difficultyLevel]);

  return (
    <div className="flex flex-col items-center">
      <div className="my-4 cursor-pointer" onClick={resetHandler}>
        {gameState === "lose" ? (
          <Sad />
        ) : gameState === "win" ? (
          <div className="flex flex-col items-center">
            <Gift /> <span className="ml-1"> you win!</span>
          </div>
        ) : (
          <Smile />
        )}
      </div>
      {cells.map((row, i) => (
        <div className="flex">
          {row.map((cellData, j) => (
            <Cell
              cellData={cellData}
              initialClick={initialClick}
              setInitialClick={setInitialClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
