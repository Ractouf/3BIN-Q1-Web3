const router = require('express').Router();
const Score = require('../models/Score');
const Joke = require('../models/joke');

router.get('/', async (req, res) => {
  const scores = await Score.find({});

  return res.json(scores);
});

router.post('/', async (req, res) => {
    if (!req.body.username || !req.body.score || !req.body.joke) {
        return res.status(400).json({
            error: 'Missing required fields',
        });
    }
    if (req.body.score < 0 || req.body.score > 10) {
        return res.status(400).json({
            error: 'Score must be between 0 and 10',
        });
    }
    if (req.body.username.length < 3) {
        return res.status(400).json({
            error: 'Username must be at least 3 characters long',
        });
    }

    const resp = await Joke.findById(req.body.joke);
    if (resp === null) {
        return res.status(404).json({
            error: 'Joke does not exist',
        });
    }

    const score = new Score({
        username: req.body.username,
        date: Date.now(),
        score: req.body.score,
        joke: req.body.joke,
    });

    const savedScore = await score.save().catch(() => {
        return res.status(409).json({
            error: 'Score already exists',
        });
    });

    return res.json(savedScore);
});

module.exports = router;
