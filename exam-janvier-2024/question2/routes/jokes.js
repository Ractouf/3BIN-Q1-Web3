const router = require('express').Router();
const Joke = require('../models/Jokes');

router.get('/', async (req, res) => {
    const jokes = await Joke.find({});

    return res.json(jokes);
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { comment, username } = req.body;

    if (!comment || !username)
        return res.status(400).json({ error: 'Missing comment or username' });

    if (comment.length <= 5)
        return res.status(400).json({ error: 'Comment must be at least 5 characters long' });

    if (username.length <= 3)
        return res.status(400).json({ error: 'Username must be at least 3 characters long' });

    const resp = await Joke.findById(id);
    if (resp === null) {
        return res.status(404).json({
            error: 'Joke does not exist',
        });
    }

    const commentExists = resp.comments.find(c => c.username === username);
    if (commentExists) {
        return res.status(409).json({
            error: 'User has already commented on this joke',
        });
    }

    const jokeToAdd = {
        joke: id,
        username,
        comment
    }

    const joke = await Joke.findById(id);
    joke.comments.push(jokeToAdd);
    await joke.save();

    return res.json(jokeToAdd);
});

module.exports = router;
