import 'components/App.css';
import { Context as CounterContext } from "contexts/CounterContext";
import { useContext } from "react";

const App = () => {
    return (
        <>
            <h2>Give feedback</h2>
            <GoodButton />
            <NeutralButton />
            <BadButton />

            <br />

            <ResetButton />
        </>
    );
}

const GoodButton = () => {
    const { good, increaseGood } = useContext(CounterContext)

    return (
        <>
            <p>Good: {good}</p>
            <button onClick={increaseGood}>increase good</button>
        </>
    );
}

const NeutralButton = () => {
    const { neutral, increaseNeutral } = useContext(CounterContext)

    return (
        <>
            <p>Neutral: {neutral}</p>
            <button onClick={increaseNeutral}>increase neutral</button>
        </>
    );
}

const BadButton = () => {
    const { bad, increaseBad } = useContext(CounterContext)

    return (
        <>
            <p>Good: {bad}</p>
            <button onClick={increaseBad}>increase bad</button>
        </>
    );
}

const ResetButton = () => {
    const { resetAll } = useContext(CounterContext)

    return (
        <>
            <button onClick={resetAll}>reset</button>
        </>
    );
}

export default App;
