import {JokeContext} from "contexts/JokeContext";
import {useContext} from "react";
import Joke from "components/Joke/Joke.jsx";

const Jokes = () => {
    const { jokes } = useContext(JokeContext);

    return (
      <>
          {jokes.map((joke) =>
              <Joke key = {joke.id} joke = {joke}/>
          )}
      </>
    );
}

export default Jokes;
