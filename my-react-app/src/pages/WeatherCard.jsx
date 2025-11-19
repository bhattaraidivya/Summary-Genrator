function WeatherCard({ weather }) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "10px",
        background: "#f4f4f4",
        width: "300px"
      }}
    >
      <h3>{weather.name}, {weather.sys.country}</h3>
      <p>🌡 Temperature: {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬 Wind: {weather.wind.speed} m/s</p>
      <p>☁ Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
