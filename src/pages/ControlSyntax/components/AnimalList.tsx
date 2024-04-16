import React from "react";
import { AnimalItem } from "./AnimalItem.tsx";

export const AnimalList: React.FC<{ animals: string[] }> = ({ animals }) => {
  if (animals.length === 0) {
    return <h3>No Animal Found.</h3>;
  }

  return (
    <ul>
      {animals.map((a) => (
        <AnimalItem key={a} a={a} />
      ))}
    </ul>
  );
};
