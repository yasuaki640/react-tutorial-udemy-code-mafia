import { useEffect, useState } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);
  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((prev) => !prev)}>toggle</button>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime((prev) => prev + 1);
      console.log("interval called");
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    document.title = "counter:" + time;
    window.localStorage.setItem("time-key-end", time);
    return () => {};
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;
