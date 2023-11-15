import React from "react";

export const View = ({ searchedCountries }) => {
  return (
    <div>
      <h1>{searchedCountries[0].name.common}</h1>
      <p>Capital: {searchedCountries[0].capital[0]}</p>
      <p>Population: {searchedCountries[0].population}</p>
      <p>Area: {searchedCountries[0].area}</p>
      <h2>Languages:</h2>
      <ul>
        {Object.keys(searchedCountries[0].languages).map((key) => (
          <li key={key}>{searchedCountries[0].languages[key]}</li>
        ))}
      </ul>

      <img
        src={searchedCountries[0].flags.png}
        alt={searchedCountries[0].name}
      />
    </div>
  );
};
