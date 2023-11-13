import React from "react";
import "./notification.css";

export const Notification = ({ notification }) => {
  if (notification === null) {
    return null;
  }
  return <div className="notification">{notification}</div>;
};
