import React from "react";

export const AnimalItem: React.FC<{ a: string }> = ({ a }) => {
  return (
    <li key={a}>
      {a}
      {a === "dog" && "⭐"}
    </li>
  );
};
