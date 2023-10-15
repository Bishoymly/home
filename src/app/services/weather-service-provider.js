"use client";
import Widget from "@/app/components/widget";
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

  return (
    <Widget className="square flex items-center justify-center">
      <h3>
        <img
          src={`http://openweathermap.org/img/wn/${
            weather.weather ? weather.weather[0].icon : "01d"
          }.png`}
          alt={weather.weather ? weather.weather[0].description : "Loading"}
          style={{ verticalAlign: "middle" }}
        />
        {Math.round(weather.main?.temp) + "°F"}
      </h3>
    </Widget>
  );
}
