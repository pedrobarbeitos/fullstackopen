import React from "react";

export const Button = (props) => {
  return <button onClick={props.handle}>{props.name}</button>;
};
