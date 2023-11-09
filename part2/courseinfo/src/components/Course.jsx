import React from "react";
import { Header } from "./Header";
import { Content } from "./Content";

export const Course = (props) => {
  console.log(props.name);

  return (
    <div>
      <Header name={props.name} />
      <Content parts={props.parts} />
    </div>
  );
};
