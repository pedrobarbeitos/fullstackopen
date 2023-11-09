import React from "react";

export const MostVotes = (props) => {
  if (props.clicks === 0) {
    return <div>No votes cast yet.</div>;
  }

  return <div>{props.anecdote}</div>;
};
