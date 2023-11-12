import React from "react";

export const Person = ({ name, number, deleteNote, id }) => {
  return (
    <div>
      {name} {number}{" "}
      <button onClick={() => deleteNote(id, name)}>Delete</button>
    </div>
  );
};
