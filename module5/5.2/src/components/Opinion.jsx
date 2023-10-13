import OpinionVote from "components/OpinionVote.jsx";

const Opinion = ({opinion}) => {
    return (
        <>
            <p>Opinion {opinion.opinion} : {opinion.votes}</p>
            <OpinionVote uuid = {opinion.uuid}/>
        </>
    );
}

export default Opinion;
