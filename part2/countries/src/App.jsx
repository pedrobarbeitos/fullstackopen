import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Results } from "./components/Results";

const App = () => {
  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}}&appid=${
          import.meta.env.VITE_WEATHER_API
        }`
      )
      .then((response) => {
        setWeather(response.data.weather);
      });
  }, []);

  // my app states

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  const lat = coordinates[0];
  const long = coordinates[1];

  const searchedCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  // console.log(searchedCountries);
  console.log(weather);
  console.log(countries);
  console.log(searchedCountries);
  console.log(coordinates);

  // my handles
  const handleSearch = (event) => {
    return setSearch(event.target.value);
  };

  return (
    <div>
      search country
      <input value={search} onChange={handleSearch} />
      <Results
        searchedCountries={searchedCountries}
        setSearch={setSearch}
        setCoordinates={setCoordinates}
        setWeather={setWeather}
      />
    </div>
  );
};

export default App;
