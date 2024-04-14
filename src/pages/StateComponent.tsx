import React, { useState } from "react";

const Count = ({
  title,
  count,
  incrementCount,
  decrementCount,
  disableCount,
}) => {
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
    <>
      <button onClick={onClickToggle}>toggle</button>
      <Count
        key="baba"
        title="baba"
        {...{ count, incrementCount, decrementCount, disableCount }}
      />
      <Count
        key="fumika"
        title="fumika"
        {...{ count, incrementCount, decrementCount, disableCount }}
      />
    </>
  );
};
