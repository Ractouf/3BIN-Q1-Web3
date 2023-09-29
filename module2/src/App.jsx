import Button from './components/Button.jsx';
import Display from './components/Display.jsx';
import { useLocalStorage } from "react-use";

const App = () => {
    const [ counter, setLocalStorage ] = useLocalStorage("counter", 0)

    const changeCount = (delta) => setLocalStorage(counter + delta);

    return (
        <>
            <Display counter = {counter}/>
            <Button changeCount = {changeCount} delta = {1} text = "plus"/>
            <Button changeCount = {changeCount} delta = {- 1} text = "minus"/>
            <Button changeCount = {changeCount} delta = {- counter} text = "zero"/>
        </>
    );
}

export default App;
