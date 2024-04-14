import { useState } from "react";

export const EventListenerState0412_2 = () => {
  const personObj = { name: "yasu", age: 123 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
    setPerson({
      name: e.target.value,
      age: person.age,
    });
  };

  const changeAge = (e) => {
    setPerson({ ...person, age: e.target.value });
  };

  const reset = () => {
    setPerson({ name: "", age: "" });
  };

  return (
    <>
      <h3>Name : {person.name}</h3>
      <h3>Age : {person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <button onClick={reset}>Reset</button>
    </>
  );
};
