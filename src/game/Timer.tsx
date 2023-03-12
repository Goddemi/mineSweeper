import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { timeIncrese, timeReset } from "../store/timer/timerSlice";
import { RootState } from "../store/store";

const Timer = () => {
  const dispatch = useDispatch();
  const { gameState, level } = useSelector(
    (state: RootState) => state.mineSweeper
  );

  const time = useSelector((state: RootState) => state.timer.time);

  useEffect(() => {
    if (gameState === "inPlaying") {
      dispatch(timeReset());
      const interval = setInterval(() => {
        dispatch(timeIncrese());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameState, level]);

  return (
    <div className="flex mb-2">
      <span>timer : </span>
      {time}
    </div>
  );
};

export default Timer;
