import { useState, useEffect } from 'react'
import person from "./services/person.js";
import PersonForm from "./components/PersonForm.jsx";
import Filter from "./components/Filter.jsx";
import Persons from "./components/Persons.jsx";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [filteredPersons, setFilteredPersons] = useState([]);

    useEffect(() => {
        person.getAll().then(initialPersons => {
            setPersons(initialPersons);
            setFilteredPersons(initialPersons);
        })
    }, []);

    function addName(e) {
        e.preventDefault();

        const personFound = persons.find(({ name }) => name === newName);
        const phoneFound = persons.find(({ phone }) => phone === newPhone);

        if (personFound && phoneFound) {
            alert(`${newName} ${newPhone} is already added to phonebook`);
            return;
        }

        const nameObj = { name: newName, phone: newPhone, id: persons.length + 1 };
        person.create(nameObj).then(returnedPerson => {
            setPersons(persons.concat(returnedPerson));
            setFilteredPersons(persons.concat(returnedPerson));
        });
    }

    return (
        <>
            <h2>Phonebook</h2>

            <Filter setFilteredPersons = {setFilteredPersons} persons = {persons} />

            <h2>add a new</h2>

            <PersonForm setNewName = {setNewName} setNewPhone = {setNewPhone} addName = {addName} />

            <h2>Numbers</h2>

            <Persons filteredPersons = {filteredPersons}></Persons>
        </>
    );
}

export default App;
