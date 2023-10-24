"use client";
import Widget from "@/components/widget";
import { useEffect, useState } from "react";

export default function Welcome(props) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(step + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [step]);

  return (
    <Widget
      key="welcome"
      className="flex items-center justify-center"
      {...props}
    >
      <h1 className="text-3xl font-extrabold">{saySomthing(step)}</h1>
    </Widget>
  );
}

function saySomthing(step) {
  if (step == 1) {
    var hour = new Date().getHours();
    if (hour >= 5 && hour < 11) return "Good morning..";
    if (hour >= 11 && hour < 16) return "Good afternoon..";
    if (hour >= 16 && hour < 21) return "Good evening..";

    return "Up late?";
  } else {
    return "How can I help?";
  }
}
