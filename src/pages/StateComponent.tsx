import React, { useState } from "react";

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };
  const disableCount = () => count <= 0;

  return (
    <div>
      <h3>
        {title} : {count}
      </h3>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount} disabled={disableCount()}>
        -
      </button>
    </div>
  );
};

export const StateComponent: React.FC = () => {
  const [toggle, setToggle] = useState(true);
  const onClickToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <>
      {toggle ? (
        <Count key="baba" title="baba" />
      ) : (
        <Count key="fumika" title="fumika" />
      )}
      <button onClick={onClickToggle}>toggle</button>
    </>
  );
};
