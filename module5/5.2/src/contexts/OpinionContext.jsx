import React, {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext(null)


const ProviderWrapper = (props) => {

    const defaultOpinions = [
        {
            uuid: uuidv4(),
            opinion: "A",
            votes: 2
        },
        {
            uuid: uuidv4(),
            opinion: "B",
            votes: 1
        }
    ];

    const [opinions, setOpinions] = useState(defaultOpinions);
    const [sortedOpinions, setSortedOpinions] = useState(defaultOpinions);

    useEffect(() => {
        const sorted = opinions.sort((a, b) => b.votes - a.votes);
        setSortedOpinions(sorted);
    }, [opinions]);

    function addOpinion(opinion) {
        if (opinions.find(o => o.opinion.toLowerCase() === opinion.toLowerCase()) !== undefined) {
            alert("This opinions is already in the list");
            return;
        }

        const copy = [...opinions];

        copy.push({
            uuid: uuidv4(),
            opinion: opinion,
            votes: 1
        });

        setOpinions(copy);
    }

    function voteOpinion(uuid) {
        const copy = [...opinions];

        copy.find(opinion => opinion.uuid === uuid).votes ++

        setOpinions(copy);
    }

    const exposedValue = {
        opinions,
        sortedOpinions,
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
