"use client";
import Widget from "@/components/widget";
import { useEffect, useState } from "react";

export default function WeatherService() {
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
      <div>
        {Math.round(weather.main?.temp)} <span className="text-sm">°F</span>
        <p className="text- text-sm">{weather?.name}</p>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${
          weather.weather ? weather.weather[0].icon : "01d"
        }.png`}
        alt={weather.weather ? weather.weather[0].description : "Loading"}
      />
    </Widget>
  ) : null;
}
