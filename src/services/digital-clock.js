"use client";
import Widget from "@/components/widget";

import { useState, useEffect } from "react";

const DigitalClock = (props) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dayName = dayNames[time.getDay()];
  const month = monthNames[time.getMonth()];
  const day = time.getDate();

  const formattedDate = `${dayName}, ${month} ${day}`;

  return (
    <Widget
      {...props}
      className={`bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center justify-center`}
    >
      <p className="text-white text-3xl">{formattedTime}</p>
      <p className="text-white text-lg">{formattedDate}</p>
    </Widget>
  );
};

export default DigitalClock;
