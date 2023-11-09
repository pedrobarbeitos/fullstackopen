import { useState } from "react";
import { Button } from "./components/Button";
import { Statistics } from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    score: 0,
    percentage: 0,
  });

  const handleGood = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1,
    };
    setClicks(newClicks);
  };

  const handleNeutral = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1,
    };
    setClicks(newClicks);
  };

  const handleBad = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1,
    };
    setClicks(newClicks);
  };

  const totalClicks = clicks.good + clicks.neutral + clicks.bad;
  clicks.total = totalClicks;

  const goodScore = clicks.good * 1;
  const neutralScore = clicks.neutral * 0;
  const badScore = clicks.bad * -1;
  const averageScore =
    Math.round(((goodScore + neutralScore + badScore) / clicks.total) * 10) /
    10;
  clicks.score = averageScore;
  const positivePercentage =
    Math.round((clicks.good / totalClicks) * 100 * 10) / 10;
  clicks.percentage = positivePercentage;

  return (
    <div>
      <h1>give feedback</h1>
      <Button name={"good"} click={handleGood} />
      <Button name={"neutral"} click={handleNeutral} />
      <Button name={"bad"} click={handleBad} />
      <h1>statistics</h1>
      <table>
        <Statistics clicks={clicks} />
      </table>
    </div>
  );
};

export default App;
