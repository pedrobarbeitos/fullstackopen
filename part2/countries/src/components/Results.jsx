import React from "react";
import { Country } from "./Country";
import { View } from "./View";

export const Results = ({
  searchedCountries,
  setSearch,
  setWeather,
  setCoordinates,
}) => {
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
    setCoordinates(searchedCountries[0].capitalInfo.latlng);
    return <View searchedCountries={searchedCountries} />;
  }

  if (searchedCountries.length > 100) {
    return <div></div>;
  }

  return <div>Too many matches, specify another filter</div>;
};
