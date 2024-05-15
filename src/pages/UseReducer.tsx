import { useReducer, useState } from "react";

export const UseReducer = () => {
  const [count, setCount] = useState(0);
  const [rCount, dispatch] = useReducer((prev: number, action: "+" | "-") => {
    switch (action) {
      case "+":
        return ++prev;
      case "-":
        return --prev;
      default:
        throw new Error();
    }
  }, 0);

  const countUp = () => {
    setCount((prev) => ++prev);
  };
  const rCountUp = () => {
    dispatch("+");
  };
  const rCountDown = () => {
    dispatch("-");
  };

  return (
    <div>
      <div>
        <h3>useStateでのイベントリスナー</h3>
        <h3>{count}</h3>
        <button onClick={countUp}>カウントアップ</button>
      </div>
      <div>
        <h3>useReducerでのイベントリスナー</h3>
        <h3>{rCount}</h3>
        <button onClick={rCountUp}>カウントアップ</button>
        <button onClick={rCountDown}>カウントダウン</button>
      </div>
    </div>
  );
};
