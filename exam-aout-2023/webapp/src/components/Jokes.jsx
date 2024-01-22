import {useContext} from "react";
import {JokeContext} from "../contexts/JokeContext";
import {useNavigate} from "react-router-dom";

const Jokes = () => {
    const { jokes } = useContext(JokeContext);
    const navigate = useNavigate();

    return (
        <>
            {jokes.map(joke =>
                <div key={joke.id} onClick = {() => navigate(`/jokes/${joke.id}`)}>
                    <h3>{joke.question}</h3>
                    <h4>{joke.answer}</h4>
                </div>)
            }
        </>
    )
}

export default Jokes;
