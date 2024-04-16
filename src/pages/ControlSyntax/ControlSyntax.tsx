import { useState } from "react";
import { AnimalList } from "./components/AnimalList.tsx";
import { AnimalFilter } from "./components/AnimalFilter.tsx";

const animals: string[] = ["dog", "cat", "bird"];

export const ControlSyntax = () => {
  const [filterKeyword, setFilterKeyword] = useState("");
  const filteredAnimals = animals.filter(
    (a) => a.indexOf(filterKeyword) !== -1,
  );

  return (
    <>
      <h3>配列のfilterメソッド</h3>
      <AnimalFilter filterState={[filterKeyword, setFilterKeyword]} />
      <AnimalList animals={filteredAnimals} />
    </>
  );
};
