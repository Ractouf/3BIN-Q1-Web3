import React, { useState } from "react";

const Context = React.createContext(null)


const ProviderWrapper = (props) => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    function increaseGood() {
        setGood(good + 1);
    }
    function increaseNeutral() {
        setNeutral(neutral + 1);
    }
    function increaseBad() {
        setBad(bad + 1);
    }
    function resetAll() {
        setGood(0);
        setNeutral(0);
        setBad(0);
    }

    const exposedValue = {
        good,
        increaseGood,
        neutral,
        increaseNeutral,
        bad,
        increaseBad,
        resetAll
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}
