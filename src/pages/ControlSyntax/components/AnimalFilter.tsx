import React, { Dispatch, SetStateAction } from "react";

export const AnimalFilter: React.FC<{
  filterState: [string, Dispatch<SetStateAction<string>>];
}> = ({ filterState }) => {
  const [filterKeyword, setFilterKeyword] = filterState;
  return (
    <input
      type="text"
      value={filterKeyword}
      onChange={(e) => setFilterKeyword(e.target.value)}
    />
  );
};
