import { useState } from "react";

export const EventListenerState0412_exercise = () => {
  const [item, setItem] = useState<string>();
  const onChangeItem = (e) => {
    setItem(e.target.value);
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
    <div>
      <h3>Item : {item}</h3>
      <input type="text" onChange={onChangeItem} />
      <h3>Count : {count}</h3>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount} disabled={disableCount()}>
        -
      </button>
    </div>
  );
};
