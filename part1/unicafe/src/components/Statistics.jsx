import React from "react";
import { StatisticLine } from "./StatisticLine";

export const Statistics = (props) => {
  if (props.clicks.total > 0) {
    return (
      <tbody>
        <StatisticLine name={"Good"} count={props.clicks.good} />
        <StatisticLine name={"Neutral"} count={props.clicks.neutral} />
        <StatisticLine name={"Bad"} count={props.clicks.bad} />
        <StatisticLine name={"Total feedbacks"} count={props.clicks.total} />
        <StatisticLine name={"Average Score"} count={props.clicks.score} />
        <StatisticLine
          name={"Positive feedback"}
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
