import React from "react";
import { Person } from "./Person";

export const Information = (props) => {
  return (
    <div>
      {props.persons.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
    </div>
  );
};
