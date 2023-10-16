"use client";
import Widget from "@/components/widget";
import { useEffect, useState } from "react";

export default function () {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    try {
      const response = await fetch("/api/weather");
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  return weather.weather ? (
    <Widget className="aspect-square flex items-center justify-center">
      <img
        src={`http://openweathermap.org/img/wn/${
          weather.weather ? weather.weather[0].icon : "01d"
        }.png`}
        alt={weather.weather ? weather.weather[0].description : "Loading"}
      />
      {Math.round(weather.main?.temp) + "°F"}
    </Widget>
  ) : null;
}
