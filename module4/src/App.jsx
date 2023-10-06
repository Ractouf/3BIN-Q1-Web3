import { useState, useEffect } from 'react'
import person from "./services/person.js";

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
        })
    }

    function handleNewName(e) {
        setNewName(e.target.value);
    }
    function handleNewPhone(e) {
        setNewPhone(e.target.value);
    }
    function handleFilter(e) {
        const foundPersons = persons.filter(({ name }) => name.toLowerCase().includes(e.target.value.toLowerCase()));

        setFilteredPersons(foundPersons);
    }

    return (
        <>
            <h2>Phonebook</h2>

            <label>
                filter shown with <input onChange = {handleFilter}/>
            </label>

            <h2>add a new</h2>

            <form onSubmit = {addName}>
                <label>name: <input onChange = {handleNewName}/></label>
                <label>number: <input onChange = {handleNewPhone}/></label>

                <label>
                    <button type="submit">add</button>
                </label>
            </form>

            <h2>Numbers</h2>

            {filteredPersons.map((person, index) => <p key = {index}>{person.name} {person.phone}</p>)}
        </>
    );
}

export default App;
