import React from "react";

export const View = ({ searchedCountries }) => {
  return (
    <div>
      <h1>{searchedCountries[0].name.common}</h1>
      <p>Capital: {searchedCountries[0].capital[0]}</p>
      <p>Population: {searchedCountries[0].population}</p>
      <p>Area: {searchedCountries[0].area}</p>
      <img
        src={searchedCountries[0].flags.png}
        alt={searchedCountries[0].name}
      />
    </div>
  );
};
