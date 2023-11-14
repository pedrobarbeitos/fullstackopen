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
        console.log(countries[50]);
      });
  }, []);

  // my app states

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);

  const searchedCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  console.log(searchedCountries);

  // my handles
  const handleSearch = (event) => {
    return setSearch(event.target.value);
  };

  return (
    <div>
      search country
      <input value={search} onChange={handleSearch} />
      <Results searchedCountries={searchedCountries} />
    </div>
  );
};

export default App;
