import React, { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      console.log(res);
      setWeather(res.data);
    } catch (err) {
      setError(err.response?.data?.error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-200 to-blue-100 px-6">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

    <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-800">
      🌤️ Weather App
    </h1>

    <div className="flex gap-3 mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter city"
        className="flex-1 border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none p-3 rounded transition"
        aria-label="City name"
      />
      <button
        onClick={fetchWeather}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow-md transition"
        aria-label="Search weather"
      >
        Search
      </button>
    </div>


    {loading && (
      <p className="text-center text-blue-500 italic">Loading...</p>
    )}
    {error && (
      <p className="text-center text-red-600 font-medium">{error}</p>
    )}

    {weather && (
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">
          {weather.location.name}, {weather.location.country}
        </h2>
        <p className="text-5xl font-bold text-gray-800 mt-2">
          {weather.current.temp_c}°C
        </p>
        <p className="capitalize text-gray-600 text-lg">
          {weather.current.condition.text}
        </p>
        <img
          src={weather.current.condition.icon}
          alt={`${weather.current.condition.text} icon`}
          className="mx-auto mt-3"
          width={64}
          height={64}
          loading="lazy"
        />
        <div className="flex justify-center gap-6 mt-3 text-sm text-gray-500">
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind: {weather.current.wind_kph} kph</p>
        </div>
      </div>
    )}
  </div>
</div>

  );
};

export default WeatherApp;