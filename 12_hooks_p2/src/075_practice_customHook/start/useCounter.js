import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => ++prev);
  };

  return { count, incrementCount };
};
