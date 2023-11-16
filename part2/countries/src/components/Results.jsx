import React from "react";
import { Country } from "./Country";
import { View } from "./View";
import { Weather } from "./Weather";

export const Results = ({ searchedCountries, setSearch }) => {
  if (searchedCountries.length < 10 && searchedCountries.length > 1) {
    return (
      <div>
        {searchedCountries.map((country) => (
          <Country
            key={country.altSpellings[0]}
            name={country.name.common}
            setSearch={setSearch}
          />
        ))}
      </div>
    );
  }

  if (searchedCountries.length === 1) {
    return (
      <div>
        <View searchedCountries={searchedCountries} />
        {/* <Weather searchedCountries={searchedCountries} /> */}
      </div>
    );
  }

  if (searchedCountries.length > 100) {
    return <div></div>;
  }

  return <div>Too many matches, specify another filter</div>;
};
