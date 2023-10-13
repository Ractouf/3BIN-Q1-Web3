import 'components/App.css';
import { Context as OpinionContext } from "contexts/OpinionContext";
import { useContext } from "react";

const App = () => {
    const { sortedOpinions } = useContext(OpinionContext);

    return (
        <>
            {sortedOpinions.map((opinion, index) => <Opinion key = {index} opinion = {opinion}></Opinion>)}
            <AddOpinion />
        </>
    );
}

const Opinion = ({opinion}) => {
    return (
        <>
            <p>Opinion {opinion.opinion} : {opinion.votes}</p>
            <OpinionVote uuid = {opinion.uuid}/>
        </>
    );
}

const OpinionVote = ({uuid}) => {
    const { voteOpinion } = useContext(OpinionContext);

    return (
        <>
            <button onClick = {() => voteOpinion(uuid)}>Vote</button>
        </>
    );
}

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

export default App;
