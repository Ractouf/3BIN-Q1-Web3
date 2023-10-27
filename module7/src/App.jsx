import { useState } from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import Menu from "components/Menu"
import AnecdoteList from "components/AnecdoteList"
import About from "components/About"
import CreateNew from "components/CreateNew"
import Footer from "components/Footer"
import Anecdote from "components/Anecdote.jsx";

const App = () => {
    const [anecdotes, setAnecdotes] = useState([
        {
            content: 'If it hurts, do it more often',
            author: 'Jez Humble',
            info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
            votes: 0,
            id: 1
        },
        {
            content: 'Premature optimization is the root of all evil',
            author: 'Donald Knuth',
            info: 'http://wiki.c2.com/?PrematureOptimization',
            votes: 0,
            id: 2
        }
    ]);

    const [notification, setNotification] = useState('');

    const addNew = (anecdote) => {
        anecdote.id = Math.round(Math.random() * 10000);
        setAnecdotes(anecdotes.concat(anecdote));

        setNotification(`A new anecdote was added by ${anecdote.author}!`);
        setTimeout(() => setNotification(''), 5000);
    }

    const match = useMatch('/anecdotes/:id');
    const anecdote = match ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id)) : null

    return (
        <>
            <h1>Software anecdotes</h1>

            <Menu />

            <h3 style={{color: "red"}}>{notification}</h3>

            <Routes>
                <Route path = "/" element = {<AnecdoteList anecdotes = {anecdotes} />} />
                <Route path = "/anecdotes/:id" element = {<Anecdote anecdote = {anecdote} />} />
                <Route path = "/create" element = {<CreateNew addNew = {addNew} />} />
                <Route path = "/about" element = {<About />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
