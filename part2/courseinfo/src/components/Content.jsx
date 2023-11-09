import React from "react";
import { Part } from "./Part";
import { Sum } from "./Sum";

export const Content = (props) => {
  //   const parts = props.course.parts;
  //   console.log("This is", props);
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}

      <Sum parts={props.parts} />
    </div>
  );
};
