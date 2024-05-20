import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h3>{time}</h3>
      <span>秒経過</span>
    </div>
  );
};

export default Example;
