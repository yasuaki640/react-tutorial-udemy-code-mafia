import { useState } from "react";

export const EventListenerState0412 = () => {
  const [cnt, setCnt] = useState(0);
  const cntUp = () => {
    setCnt(cnt + 1);
    setCnt((prevState) => prevState + 1);
    console.log(cnt);
  };
  const cntDwn = () => {
    setCnt(cnt - 1);
  };

  return (
    <>
      <p>A is Clicked in {cnt} times</p>
      <button onClick={cntUp}>+</button>
      <button onClick={cntDwn}>-</button>
    </>
  );
};
