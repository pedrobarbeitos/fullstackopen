import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Results } from "./components/Results";

const App = () => {
  const weatherObject = {
    main: { temp: 0 },
    weather: [{ description: 0, icon: 0 }],
    wind: { speed: 0 },
  };
  // my app states
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(weatherObject);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const searchedCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (searchedCountries.length === 1) {
      setCoordinates(searchedCountries[0].capitalInfo.latlng);
      // console.log(coordinates);
      // console.log(weather);
    }
  }, [searchedCountries]);

  useEffect(() => {
    if (searchedCountries.length === 1) {
      let lat = coordinates[0];
      let long = coordinates[1];
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${
            import.meta.env.VITE_WEATHER_API
          }`
        )
        .then((response) => {
          setWeather(response.data);
        });
    }
  }, [coordinates]);

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
        weather={weather}
      />
    </div>
  );
};

export default App;
