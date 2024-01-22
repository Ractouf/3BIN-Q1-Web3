import {createContext, useEffect, useState} from "react";
import joke from "../services/jokeApi";
import score from "../services/scoreApi";

const JokeContext = createContext(null);

const JokeProvider = ({children}) => {
    const [jokes, setJokes] = useState([]);
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetchScoresAndJokes();
        }

        fetchData();
    }, []);

    async function fetchScoresAndJokes() {
        const s = await score.getAll();
        setScores(s);

        const j = await joke.getAll();
        j.forEach(k => {
            const filteredScores = s.filter(score => score.joke === k.id);
            const scoreCount = filteredScores.length;
            const averageScore = (filteredScores.reduce((a, b) => a + b.score, 0) / scoreCount).toFixed(1);

            k.scoreCount = scoreCount;
            k.averageScore = averageScore ? averageScore : 0;
        });

        setJokes(j);
    }

    function getJokeWithScores(id) {
        const joke = jokes.find((joke) => joke.id === id);

        if (!joke) {
            return null;
        }

        const jokeScores = scores.filter((score) => score.joke === id);

        return {
            ...joke,
            scores: jokeScores
        };
    }

    async function createOneScore(u, s, jokeId) {
        const newScore = {
            username: u,
            score: s,
            joke: jokeId
        };

        await score.createOne(newScore);
        setScores([...scores, newScore]);

        await fetchScoresAndJokes();
    }

    const exposedValue = {
        jokes,
        scores,
        getJokeWithScores,
        createOneScore
    };

    return (
        <JokeContext.Provider value = {exposedValue}>
            { children }
        </JokeContext.Provider>
    );
};

export { JokeContext, JokeProvider };