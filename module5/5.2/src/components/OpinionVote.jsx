import { OpinionContext } from "contexts/OpinionContext";
import { useContext } from "react";

const OpinionVote = ({uuid}) => {
    const { voteOpinion } = useContext(OpinionContext);

    return (
        <>
            <button onClick = {() => voteOpinion(uuid)}>Vote</button>
        </>
    );
}

export default OpinionVote;
