const Filter = ({ setFilteredPersons, persons }) => {
    function handleFilter(e) {
        const foundPersons = persons.filter(({ name }) => name.toLowerCase().includes(e.target.value.toLowerCase()));

        setFilteredPersons(foundPersons);
    }

    return (
        <>
            <label>
                filter shown with <input onChange = {handleFilter}/>
            </label>
        </>
    )
}

export  default Filter;