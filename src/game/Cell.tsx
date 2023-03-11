import { useDispatch } from "react-redux";
import { Bomb } from "../icon/Icons";
import { clickCell } from "../store/minesweeper/mineSweeperSlice";
import { CellType } from "../type/types";

const Cell = ({ cellData }: { cellData: CellType }) => {
  const { row, col, isClicked, isMine } = cellData;
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(clickCell(cellData));
  };

  return (
    <div
      className={`w-7 h-7  border-white border-2 ${
        isClicked ? `bg-slate-800` : `bg-slate-400`
      }`}
      onClick={clickHandler}
    >
      {" "}
      {isClicked &&
        (isMine ? (
          <span className="text-yellow-300">
            <Bomb />
          </span>
        ) : (
          <span>개수</span>
        ))}
    </div>
  );
};

export default Cell;
