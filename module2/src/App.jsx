import { useState } from "react";
import Button from './components/Button.jsx';
import Display from './components/Display.jsx';

const App = () => {
    const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem("counter")));

    const changeCount = (delta) => {
        setCounter(counter + delta);
        localStorage.setItem("counter", JSON.stringify(counter + delta));
    }

    return (
        <>
            <Display counter = {counter}/>
            <Button changeCount = {changeCount} delta = {1} text = "plus"/>
            <Button changeCount = {changeCount} delta = {-1} text = "minus"/>
            <Button changeCount = {changeCount} delta = {- counter} text = "zero"/>
        </>
    );
}

export default App;
