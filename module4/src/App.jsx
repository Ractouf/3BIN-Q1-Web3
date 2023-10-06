import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellos', phone: '+32495 20 41 90'},
        { name: 'Damien Lapin ski', phone: '+32454 32 10'},
        { name: 'Guillherme LaSal', phone: '+32467 89 11'},
    ]);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [filteredPersons, setFilteredPersons] = useState(persons);

    function addName(e) {
        e.preventDefault();

        const personFound = persons.find(({ name }) => name === newName);
        const phoneFound = persons.find(({ phone }) => phone === newPhone);

        if (personFound && phoneFound) {
            alert(`${newName} ${newPhone} is already added to phonebook`);
            return;
        }

        const nameObj = { name: newName, phone: newPhone };
        setPersons(persons.concat(nameObj));
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
