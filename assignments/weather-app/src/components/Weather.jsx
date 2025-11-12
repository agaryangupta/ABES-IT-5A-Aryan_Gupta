import React from "react";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiFog,
  WiThunderstorm,
  WiDust,
  WiDayCloudy,
} from "react-icons/wi";
import "./Weather.css";

const Weather = ({ data }) => {
  const condition = data.weather?.[0]?.main?.toLowerCase();
  const description = data.weather?.[0]?.description;

  // Select icon based on weather condition
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "clear":
        return <WiDaySunny size={90} color="#FFD93D" />;
      case "clouds":
        return <WiDayCloudy size={90} color="#E0E0E0" />;
      case "rain":
        return <WiRain size={90} color="#4FC3F7" />;
      case "snow":
        return <WiSnow size={90} color="#BBDEFB" />;
      case "mist":
      case "fog":
        return <WiFog size={90} color="#B0BEC5" />;
      case "thunderstorm":
        return <WiThunderstorm size={90} color="#FFD54F" />;
      case "dust":
      case "sand":
        return <WiDust size={90} color="#D4A373" />;
      default:
        return <WiCloud size={90} color="#E0E0E0" />;
    }
  };

  return (
    <div className="weather-card">
      <h2>
        {data.name}, {data.sys?.country}
      </h2>

      <div className="weather-icon">{getWeatherIcon(condition)}</div>

      <h1>{Math.round(data.main?.temp)}°C</h1>
      <p style={{ textTransform: "capitalize" }}>{description}</p>
      <div className="details">
        <p>Humidity: {data.main?.humidity}%</p>
        <p>Wind: {data.wind?.speed} m/s</p>
      </div>
    </div>
  );
};

export default Weather;
