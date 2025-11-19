import { useState } from "react";
import WeatherCard from "./WeatherCard";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "57c25d1120ed47739bc32739251911";  //replace with your actual key

  async function fetchWeather() {
    if (!city) return;

    try {
      setError("");
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!res.ok) {
        setError("City not found");
        setWeather(null);
        return;
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError("Something went wrong");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Weather Checker</h2>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={fetchWeather}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default Weather;
