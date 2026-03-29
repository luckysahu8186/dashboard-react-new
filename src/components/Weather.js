import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  // 🔥 TERI API KEY
  const API_KEY = "aa99b94b141344338a5173309262703";

  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );

      const data = await res.json();

      // ❌ city galat ho to
      if (data.error) {
        setWeather(null);
        alert("City not found ❌");
        return;
      }

      setWeather(data);
    } catch (err) {
      console.log(err);
      alert("Error fetching weather ⚠️");
    }
  };

  return (
    <div className="card">
      <h2>🌤️ Weather</h2>

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        onKeyDown={(e) => {
          if (e.key === "Enter") getWeather();
        }}
      />

      <button onClick={getWeather}>Search</button>

      {weather && (
        <div style={{ marginTop: "10px" }}>
          <h3>{weather.location.name}</h3>
          <p>🌡️ {weather.current.temp_c}°C</p>
          <p>☁️ {weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;