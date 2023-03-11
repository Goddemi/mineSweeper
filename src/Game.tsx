import Difficulty from "./game/Difficulty";
import GameBoard from "./game/GameBoard";

const Game = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Difficulty />
      <GameBoard />
    </div>
  );
};

export default Game;
