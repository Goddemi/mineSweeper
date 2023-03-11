import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sad, Smile } from "../icon/Icons";
import { makeBoard, resetGame } from "../store/minesweeper/mineSweeperSlice";
import { RootState } from "../store/store";
import Cell from "./Cell";

const GameBoard = () => {
  const dispatch = useDispatch();
  const difficultyLevel = useSelector(
    (state: RootState) => state.mineSweeper.difficulty
  );
  const gameOverState = useSelector(
    (state: RootState) => state.mineSweeper.gameOver
  );
  const cells = useSelector((state: RootState) => state.mineSweeper.cells);

  useEffect(() => {
    dispatch(makeBoard());
  }, [difficultyLevel]);

  return (
    <div className=" flex flex-col items-center">
      <div className="my-5 cursor-pointer">
        {gameOverState ? <Sad /> : <Smile />}
      </div>
      {cells.map((row, i) => (
        <div className="flex">
          {row.map((cellData, j) => (
            <Cell cellData={cellData} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
