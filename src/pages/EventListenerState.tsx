import { useState } from "react";

export const EventListenerState = () => {
  const [val, setVal] = useState<string>();

  console.log("Re rendering done!!!");

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setVal(e.target.value);
        }}
      />
      <span> = {val}</span>
    </>
  );
};
