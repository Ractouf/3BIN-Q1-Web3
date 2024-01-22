import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import {JokeProvider} from "../contexts/JokeContext";
import React from "react";

const AppLoader = () => {
    return (
        <JokeProvider>
            <Router>
                <App />
            </Router>
        </JokeProvider>
    );
}

export default AppLoader;