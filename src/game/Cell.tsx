import { useDispatch } from "react-redux";
import { Bomb } from "../icon/Icons";
import { clickCell } from "../store/minesweeper/mineSweeperSlice";
import { CellType } from "../type/types";

const Cell = ({
  cellData,
  initialClick,
  setInitialClick,
}: {
  cellData: CellType;
  initialClick: boolean;
  setInitialClick: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { isClicked, isMine, nearMineCounter } = cellData;
  const dispatch = useDispatch();

  //첫번째 클릭한 셀에 지뢰가 있을 경우 경고문을 띄우고 다음 과정을 진행하지 않도록 구현
  //지뢰가 아닐 경우 '첫번째클릭' 상태값을 false로 바꿔준다.
  const clickHandler = () => {
    if (initialClick && isMine) {
      alert("your first click is mine");
    } else {
      setInitialClick(false);
      dispatch(clickCell(cellData));
    }
  };

  return (
    <div
      className={`w-7 h-7 border-white border-2 text-center cursor-pointer ${
        isClicked ? `bg-slate-800` : `bg-slate-400`
      }`}
      onClick={clickHandler}
    >
      {isClicked &&
        (isMine ? (
          <span className="text-yellow-300">
            <Bomb />
          </span>
        ) : (
          <span className=" text-white">{nearMineCounter || ""}</span>
        ))}
    </div>
  );
};

export default Cell;
