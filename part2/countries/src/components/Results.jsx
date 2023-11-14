import React from "react";
import { Country } from "./Country";

export const Results = ({ searchedCountries }) => {
  return (
    <div>
      {searchedCountries.map((country) => (
        <Country key={country.altSpellings[0]} name={country.name.common} />
      ))}
    </div>
  );
};
