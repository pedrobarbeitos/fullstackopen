import React from "react";
import { Part } from "./Part";

export const Content = (props) => {
  console.log(props.parts[0]);
  return (
    <div>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </div>
  );
};
