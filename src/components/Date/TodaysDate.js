import React from "react";
import Moment from "react-moment";
import "./TodaysDate.css";

export default function TodaysDate() {
  const date = new Date();
  return (
    <h2>
      <Moment className="date" format="MMMM Do YYYY">
        {date}
      </Moment>
    </h2>
  );
}
