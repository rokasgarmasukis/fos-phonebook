import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

import axios from "axios";

import { useState, useEffect } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      const data = response.data;
      setPersons(data)
    })
  }, [])

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <div>
      <h2>Phonebook</h2>
      filter with:
      <Filter search={search} setSearch={setSearch} />
      <h2>Add new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
