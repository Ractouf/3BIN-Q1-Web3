import { OpinionContext } from "contexts/OpinionContext";
import { useContext } from "react";

const AddOpinion = () => {
    const { addOpinion } = useContext(OpinionContext);

    function handleSubmit(e) {
        e.preventDefault();

        addOpinion(e.target[0].value);
    }

    return (
        <>
            <form onSubmit = {handleSubmit}>
                <label>
                    <input />
                    <input type={"submit"} value = {"Ajouter"}/>
                </label>
            </form>
        </>
    );
}

export default AddOpinion;
