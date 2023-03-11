import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeBoard } from "../store/minesweeper/mineSweeperSlice";
import { RootState } from "../store/store";
import Cell from "./Cell";

const GameBoard = () => {
  const dispatch = useDispatch();
  const cells = useSelector((state: RootState) => state.mineSweeper.cells);

  console.log(cells);

  useEffect(() => {
    dispatch(makeBoard());
  }, []);

  return (
    <div className="my-5">
      {cells.map((row, i) => (
        <div className="flex">
          {row.map((cell, j) => (
            <Cell />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
