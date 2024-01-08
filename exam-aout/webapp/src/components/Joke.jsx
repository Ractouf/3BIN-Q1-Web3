import { useContext, useEffect, useState } from "react";
import { JokeContext } from "../contexts/JokeContext";
import { useParams } from "react-router-dom";

const Joke = () => {
    const { jokes, getJokeWithScores, createOneScore } = useContext(JokeContext);
    const [joke, setJoke] = useState(null);
    const [username, setUsername] = useState("");
    const [score, setScore] = useState(0);
    const params = useParams();

    useEffect(() => {
        const j = getJokeWithScores(params.id);

        if (j !== null) {
            j.scores.sort((a, b) => {
                if (a.score === b.score) {
                    return a.date < b.date ? -1 : 1;
                }

                return a.score < b.score ? 1 : -1;
            });
        }

        setJoke(j);
    }, [jokes]);

    function handleSubmit(e) {
        e.preventDefault();

        createOneScore(username, score, params.id);

        e.target.reset();
        setUsername("");
        setScore(0);
    }

    return (
        <>
            {joke ?
                <div>
                    <h1>{joke.question}</h1>
                    <h2>{joke.answer}</h2>
                    <h3>Category: {joke.category}</h3>

                    <h4>Average score : {joke.averageScore}</h4>
                    <h4>Number of scores : {joke.scoreCount}</h4>

                    <h4>Scores des utilisateurs</h4>
                    {joke.scores.map(score =>
                        <div key={score.id}>
                            <h5>{score.score} de {score.username}</h5>
                        </div>)
                    }

                    <form onSubmit = {handleSubmit}>
                        <h3>Add your own score</h3>
                        <label>
                            Username:
                            <input onChange = {(e) => setUsername(e.target.value)} type = "text" name = "username"/>
                        </label>
                        <label>
                            Score:
                            <input onChange = {(e) => setScore(e.target.value)} type = "number" max = "10" min = "0" name = "score"/>
                        </label>
                        <input type = "submit" value = "Ajouter"/>
                    </form>
                </div>
                :
                <h1>Loading...</h1>
            }
        </>
    )
}

export default Joke;
