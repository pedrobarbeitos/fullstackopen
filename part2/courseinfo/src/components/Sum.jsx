import React from "react";

export const Sum = (props) => {
  const sum = props.parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);

  return (
    <div>
      <b>total of {sum} exercises</b>
    </div>
  );
};
