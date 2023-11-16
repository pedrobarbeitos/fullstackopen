import React from "react";

export const Weather = ({ searchedCountries, weather }) => {
  if (searchedCountries.length === 1) {
    return (
      <div>
        <h2>Weather in {searchedCountries[0].capital[0]} </h2>

        <p>
          Temperature: {Math.round((weather.main.temp - 273.15) * 10) / 10}{" "}
          Celsius
        </p>
        <p>Sky: {weather.weather[0].description}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        ></img>
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    );
  }
};
