import { useState } from "react";

export const EventListenerState0412_exercise_2 = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);

  const shuffle = () => {
    const newNums = [...nums]; // 新たな配列を定義し直す deep copy
    const poped = newNums.pop();
    newNums.unshift(poped!);

    setNums(newNums);
  };

  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};
