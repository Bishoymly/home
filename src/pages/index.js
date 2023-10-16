"use client";
import DigitalClock from "../services/clock-service-provider";
import weatherServiceProvider from "../services/weather-service-provider";
import welcomeServiceProvider from "../services/welcome-service-provider";

export default function Home() {
  return (
    <div className="grid bg-gray-100 place-items-center min-h-screen p-5">
      <div className="grid gap-5 max-w-5xl grid-cols-2 grid-rows-6 sm:grid-cols-3 sm:grid-rows-5 md:grid-cols-4 md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-3">
        {welcomeServiceProvider()}
        {weatherServiceProvider()}
        {DigitalClock()}
      </div>
    </div>
  );
}
