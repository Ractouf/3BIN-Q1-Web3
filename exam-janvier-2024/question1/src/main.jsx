import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from "react-router-dom";
import {JokeProvider} from "contexts/JokeContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <JokeProvider>
          <Router>
              <App />
          </Router>
      </JokeProvider>
  </React.StrictMode>,
)
