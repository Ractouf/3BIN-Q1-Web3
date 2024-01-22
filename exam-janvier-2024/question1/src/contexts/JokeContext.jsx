import {createContext, useEffect, useState} from "react";
import joke from "services/jokesApi";

const JokeContext = createContext(null);

const JokeProvider = ({children}) => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        fetchJokes();
    }, []);

    async function fetchJokes() {
        const jokes = await joke.getAll();

        setJokes(jokes);
    }

    async function updateJoke(id, imageUrl) {
        await joke.patchOne(id, imageUrl);

        await fetchJokes();
    }

    const exposedValue = {
        jokes,
        updateJoke
    };

    return (
        <JokeContext.Provider value = {exposedValue}>
            { children }
        </JokeContext.Provider>
    );
};

export { JokeContext, JokeProvider };
