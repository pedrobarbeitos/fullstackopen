import React from "react";
import { StatisticLine } from "./StatisticLine";

export const Statistics = (props) => {
  if (props.clicks.total > 0) {
    return (
      <tbody>
        <StatisticLine name={"good"} count={props.clicks.good} />
        <StatisticLine name={"neutral"} count={props.clicks.neutral} />
        <StatisticLine name={"bad"} count={props.clicks.bad} />
        <StatisticLine name={"all"} count={props.clicks.total} />
        <StatisticLine name={"average"} count={props.clicks.score} />
        <StatisticLine
          name={"positive"}
          count={props.clicks.percentage}
          symbol={"%"}
        />
      </tbody>
    );
  }

  return (
    <tbody>
      <tr>
        <td>No feedback given</td>
      </tr>
    </tbody>
  );
};
