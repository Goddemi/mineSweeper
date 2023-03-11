import Difficulty from "./game/Difficulty";
import GameBoard from "./game/GameBoard";

const Game = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center p-6 border-2 border-gray">
        <Difficulty />
        <GameBoard />
      </div>
    </div>
  );
};

export default Game;
