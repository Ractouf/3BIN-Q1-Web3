import 'components/App.css';
import { Context as OpinionContext } from "contexts/OpinionContext";
import { useContext } from "react";

const App = () => {
    const { opinions } = useContext(OpinionContext);

    return (
        <>
            {opinions.map((opinion, index) => <Opinion key = {index} opinion = {opinion}></Opinion>)}
            <AddOpinion />
        </>
    );
}

const Opinion = ({opinion}) => {
    return (
        <>
            <p>Opinion {opinion.opinion} : {opinion.votes}</p>
            <OpinionVote id = {opinion.id}/>
        </>
    );
}

const OpinionVote = ({id}) => {
    const { voteOpinion } = useContext(OpinionContext);

    return (
        <>
            <button onClick = {() => voteOpinion(id)}>Vote</button>
        </>
    );
}

const AddOpinion = () => {
    return (
        <>
            <form>
                <label>
                    <input />
                    <input type={"submit"} value = {"Ajouter"}/>
                </label>
            </form>
        </>
    );
}

export default App;
