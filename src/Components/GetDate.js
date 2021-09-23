import React, { useState } from "react";

function GetDate() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const rawDate = new Date();
  const [currentDate, setCurrentDate] = useState({
    day: days[rawDate.getDay().toString()],
    month: monthNames[rawDate.getMonth().toString()],
    date: rawDate.getDate().toString(),
    year: rawDate.getFullYear().toString(),
  });
  return (
    <div>
      {currentDate.day}, {currentDate.month} {currentDate.date},
      {currentDate.year}
    </div>
  );
}

export default GetDate;
