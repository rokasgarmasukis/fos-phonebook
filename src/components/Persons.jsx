import Person from "./Person";

const Persons = ({ persons, handleDeletePerson }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.name}
          person={person}
          handleDeletePerson={handleDeletePerson}
        />
      ))}
    </div>
  );
};

export default Persons;
