import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

import personService from "./services/personService";

import { useState, useEffect } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const addPerson = (e, name, number) => {
    e.preventDefault();
    if (persons.some((person) => person.name === name)) {
      alert(`${name} is already added to phonebook`);
      return;
    }
    const newPerson = { name, number: parseInt(number) };

    personService.create(newPerson).then((person) => {
      setPersons(persons.concat(person));
    });
  };

  const removePerson = (id) => {
    personService.deletePerson(id).then(()=>{
      setPersons(persons.filter(person => person.id !== id))
    })
  }

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      filter with:
      <Filter search={search} setSearch={setSearch} />
      <h2>Add new</h2>
      <PersonForm persons={persons} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDeletePerson={removePerson}/>
    </div>
  );
};

export default App;
