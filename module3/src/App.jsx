import { useState } from "react";

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);

    function handleGoodClick() {
        setGood(good + 1);
        setTotal(good + neutral + bad + 1);
    }

    function handleNeutralClick() {
        setNeutral(neutral + 1);
        setTotal(good + neutral + bad + 1);
    }

    function handleBadClick() {
        setBad(bad + 1);
        setTotal(good + neutral + bad + 1);
    }

    return (
        <>
            <h2>Give feedback</h2>

            <Button handler = {handleGoodClick} text = {"good"}/>
            <Button handler = {handleNeutralClick} text = {"neutral"}/>
            <Button handler = {handleBadClick} text = {"bad"}/>

            <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
        </>
    );
}

const Statistics = ({good, neutral, bad, total}) => {
    if (total < 1) return <p>No feedback given</p>;

    return (
        <>
            <h2>Statistics</h2>

            <table>
                <tbody>
                    <tr><StatisticLine value = {good} text = {"Good"}/></tr>
                    <tr><StatisticLine value = {neutral} text = {"Neutral"}/></tr>
                    <tr><StatisticLine value = {bad} text = {"Bad"}/></tr>

                    <tr><StatisticLine value = {total} text = {"Total"}/></tr>
                    <tr><StatisticLine value = {(good - bad) / total} text = {"Average"}/></tr>
                    <tr><StatisticLine value = {(100 / total) * good} text = {"Positive"}/></tr>
                </tbody>
            </table>
        </>
    );
}

const StatisticLine = ({value, text}) => {
    return <td>{text}: {value}</td>
}

const Button = ({handler, text}) => {

    return (
        <button onClick = {handler}>
            {text}
        </button>
    );
}

export default App;