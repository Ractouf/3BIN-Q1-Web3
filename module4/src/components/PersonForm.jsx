const PersonForm = ({setNewName, setNewPhone, addName}) => {
    function handleNewName(e) {
        setNewName(e.target.value);
    }
    function handleNewPhone(e) {
        setNewPhone(e.target.value);
    }

    return (
        <>
            <form onSubmit = {addName}>
                <label>name: <input onChange = {handleNewName}/></label>
                <label>number: <input onChange = {handleNewPhone}/></label>

                <label>
                    <button type="submit">add</button>
                </label>
            </form>
        </>
    )
}

export default PersonForm;