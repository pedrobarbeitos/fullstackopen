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
    if (searchedCountries.length === 1) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}}&appid=${
            import.meta.env.VITE_WEATHER_API
          }`
        )
        .then((response) => {
          setWeather(response.data.weather);
        });
    }
  }, []);

  // my app states

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  const searchedCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  // setCoordinates(searchedCountries[0].capitalInfo.latlng);

  let lat = coordinates[0];
  let long = coordinates[1];

  // console.log(searchedCountries);
  // console.log(coordinates);

  // my handles
  const handleSearch = (event) => {
    return setSearch(event.target.value);
  };

  return (
    <div>
      search country
      <input value={search} onChange={handleSearch} />
      <Results searchedCountries={searchedCountries} setSearch={setSearch} />
    </div>
  );
};

export default App;
