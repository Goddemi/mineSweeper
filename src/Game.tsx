import Level from "./game/Level";
import GameBoard from "./game/GameBoard";

const Game = () => {
  return (
    <div className="h-max flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center p-6 border-2 border-gray">
        <Level />
        <GameBoard />
      </div>
    </div>
  );
};

export default Game;
