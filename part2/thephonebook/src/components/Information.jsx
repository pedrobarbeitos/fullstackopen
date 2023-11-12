import React from "react";
import { Person } from "./Person";

export const Information = ({ persons, deleteNote }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          number={person.number}
          deleteNote={deleteNote}
          id={person.id}
        />
      ))}
    </div>
  );
};
