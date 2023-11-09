import React from "react";

export const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {props.count} {props.symbol}
      </td>
    </tr>
  );
};
