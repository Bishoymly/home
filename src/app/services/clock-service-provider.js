"use client";
import Widget from "@/app/components/widget";

import { useState, useEffect } from "react";

const DigitalClock = () => {
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

  return (
    <Widget className="square bg-gradient-to-r from-cyan-500 to-blue-500 square flex items-center justify-center">
      <span className="text-white">{formattedTime}</span>
    </Widget>
  );
};

export default DigitalClock;
