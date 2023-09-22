import { useState } from "react";
import Button from './components/Button.jsx';
import Display from './components/Display.jsx';

const App = () => {
    const [ counter, setCounter ] = useState(0);

    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0);

    return (
        <>
            <Display counter = {counter}/>
            <Button handleClick = {increaseByOne} text = "plus"></Button>
            <Button handleClick = {decreaseByOne} text = "minus"></Button>
            <Button handleClick = {setToZero} text = "zero"></Button>
        </>
    );
}

export default App;
