import React from "react";

export const Country = ({ name, setSearch }) => {
  return (
    <div>
      {name}
      <button onClick={() => setSearch(name)}>show</button>
    </div>
  );
};
