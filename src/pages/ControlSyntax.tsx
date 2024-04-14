import { useState } from "react";

const animals = ["dog", "cat", "bird"];

export const ControlSyntax = () => {
  const [filterKeyword, setFilterKeyword] = useState("");

  return (
    <>
      <h3>配列のfilterメソッド</h3>
      <input
        type="text"
        value={filterKeyword}
        onChange={(e) => setFilterKeyword(e.target.value)}
      />
      <ul>
        {animals
          .filter((a) => a.indexOf(filterKeyword) !== -1)
          .map((a) => (
            <li key={a}>{a}</li>
          ))}
      </ul>
    </>
  );
};
