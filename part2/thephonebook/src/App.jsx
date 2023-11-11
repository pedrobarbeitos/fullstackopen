import { useEffect, useState } from "react";
import { Information } from "./components/Information";
import { SearchInput } from "./components/SearchInput";
import { AddPersonForm } from "./components/AddPersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    nameExists
      ? alert(`${newName} is already added to phone book`)
      : setPersons(persons.concat(personObject)),
      setNewName(" "),
      setNewNumber(" ");
  };

  const nameExists = persons.some((obj) => obj["name"] === newName);

  // returns my search array
  const searchedPerson = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    return setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    return setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    return setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchInput search={search} handleSearch={handleSearch} />

      <h2>Add a new</h2>
      <AddPersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>
      <Information persons={searchedPerson} />

      <div>{/* debug: {newName} {newNumber} */}</div>
    </div>
  );
};

export default App;
