import { useState } from "react";

function useLocalStorage(key, initialValue) {
    if (JSON.parse(localStorage.getItem(key)) == null)
        localStorage.setItem(key, JSON.stringify(initialValue));

    const value = JSON.parse(localStorage.getItem(key))

    const [ counter, setCounter ] = useState(value);

    const setLocalStorage = (key, value) => {
        setCounter(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [ counter, setLocalStorage ];
}

export { useLocalStorage };
