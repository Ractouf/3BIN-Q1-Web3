import Person from "./Person.jsx";

const Persons = ({ filteredPersons }) => {

    return (
        <>
            {filteredPersons.map((person, index) => <Person key = {index} person = {person} />)}
        </>
    )
}

export default Persons;