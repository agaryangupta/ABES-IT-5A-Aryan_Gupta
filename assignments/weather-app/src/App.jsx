import React, { useState } from "react";
import Weather from "./components/Weather";
import "./App.css"; 

const App = () => {
  const [city, setCity] = useState(""); 
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;

  console.log("🔑 Loaded API Key:", apiKey);

 
  const fetchWeatherByCity = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setError(null);

    try {
      console.log(`🌍 Fetching weather for: ${cityName}`);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
      )}&appid=${apiKey}&units=metric`;

      console.log("📡 API Request URL:", url);

      const res = await fetch(url);
      const data = await res.json();
      console.log("🧾 API Response:", data);

      if (res.ok && data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        setError(data.message || "City not found");
      }
    } catch (err) {
      console.error("⚠️ Fetch error:", err);
      setError("Network error. Please check your connection.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

 
  const onSearch = () => fetchWeatherByCity(city.trim());
  const onKeyPress = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="app">
      <h1>🌤️ Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={onKeyPress}
        />
        <button onClick={onSearch}>Search</button>
      </div>

      
      {!weather && !loading && !error && (
        <p style={{ fontSize: "1.2rem", opacity: "0.9" }}>
          🔎 Search for a city to view its weather.
        </p>
      )}

      
      {loading && <p>🔄 Fetching weather data...</p>}

     
      {error && (
        <p style={{ color: "salmon", fontWeight: "bold" }}>
          ❌ {error}
        </p>
      )}

      
      {weather && !loading && <Weather data={weather} />}
    </div>
  );
};

export default App;
