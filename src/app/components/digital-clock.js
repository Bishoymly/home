"use client";

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

  return <div>{formattedTime}</div>;
};

export default DigitalClock;
