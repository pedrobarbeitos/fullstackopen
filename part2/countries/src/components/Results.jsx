import React from "react";
import { Country } from "./Country";

export const Results = ({ searchedCountries }) => {
  if (searchedCountries.length < 10 && searchedCountries.length > 1) {
    return (
      <div>
        {searchedCountries.map((country) => (
          <Country key={country.altSpellings[0]} name={country.name.common} />
        ))}
      </div>
    );
  }

  if (searchedCountries.length === 1) {
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
  }

  if (searchedCountries.length > 100) {
    return <div></div>;
  }

  return <div>Too many matches, specify another filter</div>;
};
