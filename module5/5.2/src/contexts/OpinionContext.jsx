import React, { useState } from "react";

const Context = React.createContext(null)


const ProviderWrapper = (props) => {

    const defaultOpinions = [
        {
            id: 0,
            opinion: "A",
            votes: 2
        },
        {
            id: 1,
            opinion: "B",
            votes: 1
        }
    ];

    const [opinions, setOpinions] = useState(defaultOpinions);

    function addOpinion(opinion) {
        const copy = [...opinions];
        copy.push({
            id: copy.length,
            opinion: opinion,
            votes: 1
        });
        setOpinions(copy);
    }

    function voteOpinion(id) {
        const copy = [...opinions];

        copy[id].votes++;

        setOpinions(copy);
    }

    const exposedValue = {
        opinions,
        addOpinion,
        voteOpinion
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}
