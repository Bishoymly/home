"use client";
import Widget from "@/components/widget";

export default function () {
  return (
    <Widget className="aspect-2/1 col-span-2 row-span-1 flex items-center justify-center">
      <h1 className="text-4xl font-extrabold">{saySomthing()}</h1>
    </Widget>
  );
}

function saySomthing() {
  var hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return "Good morning..";
  if (hour >= 11 && hour < 16) return "Good afternoon..";
  if (hour >= 16 && hour < 21) return "Good evening..";

  return "Up late?";
}
