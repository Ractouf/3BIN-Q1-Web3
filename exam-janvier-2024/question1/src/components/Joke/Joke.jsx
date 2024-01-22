import {useContext, useState} from "react";
import {JokeContext} from "contexts/JokeContext";

const Joke = ({ joke }) => {
    const [imageUrl, setImageUrl] = useState(joke.imageUrl);
    const { updateJoke } = useContext(JokeContext);

    function handleClick() {
        updateJoke(joke.id, imageUrl);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>{joke.name}</h1>
            <h2>{joke.joke}</h2>
            <div>
                <input type = 'text' value = {imageUrl} onChange = {(e) => setImageUrl(e.target.value)}/>
                <button onClick = {handleClick}>Mettre a jour l'image</button>
            </div>
            <img src={joke.imageUrl} alt={joke.name} style={{maxWidth: "200px"}}/>
        </div>
    );
};

export default Joke;
