import { useEffect, useState } from "react";
import { Information } from "./components/Information";
import { SearchInput } from "./components/SearchInput";
import { AddPersonForm } from "./components/AddPersonForm";
import server from "./services/persons";
import { Notification } from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    server.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const nameExists = persons.some((person) => person["name"] === newName);
    const existingPerson = persons.find((person) => person.name === newName);

    const updateNumber = (id, newNumber) => {
      const url = `http://localhost:3001/persons/${id}`;
      const updatedNumber = { number: newNumber };

      if (
        nameExists &&
        window.confirm(
          `${newName} is already added to phone book, replace old number with a new one?`
        )
      ) {
        server.update(url, updatedNumber).then((response) => {
          setPersons(
            persons.map((person) => (person.id === id ? response.data : person))
          );
          setNotification(`${newName} number was updated`);
          setTimeout(() => {
            setNotification(null);
          }, 2000);
        });
      }
    };

    nameExists
      ? updateNumber(existingPerson.id, newNumber)
      : server.create(personObject).then((response) => {
          setPersons(persons.concat(response.data));
          setNotification(`Added ${newName}`);
          setTimeout(() => {
            setNotification(null);
          }, 2000);
        }),
      setNewName(" "),
      setNewNumber(" ");
  };

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

  const deleteNote = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      setPersons(persons.filter((person) => person.id !== id));
      server.delete(id);
    }
  };

  console.log(newName);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
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
      <Information persons={searchedPerson} deleteNote={deleteNote} />

      <div>{/* debug: {newName} {newNumber} */}</div>
    </div>
  );
};

export default App;
