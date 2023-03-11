import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDifficulty } from "../store/minesweeper/mineSweeperSlice";

const Customize = () => {
  const dispatch = useDispatch();

  const inputList = ["width", "height", "mines"];
  const [customInputValues, setCustomInputValues] = useState({
    width: 0,
    height: 0,
    mines: 0,
  });

  const customInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCustomInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { width, height, mines } = customInputValues;
    if (width && height && mines) {
      const customValues = [height, width, mines];
      dispatch(setDifficulty(customValues));
    }
  };

  return (
    <form className="mt-4" onSubmit={submitHandler}>
      {inputList.map((name) => (
        <input
          name={name}
          type="number"
          placeholder={name}
          className="w-16 mx-1 border-2"
          onChange={customInputHandler}
        />
      ))}
      <button className="px-2 py-[2px] bg-slate-400 text-white rounded-md">
        Set
      </button>
    </form>
  );
};

export default Customize;
