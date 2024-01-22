const router = require('express').Router();
const Joke = require('../models/joke');

router.get("/", async (req, res) => {
    const jokes = await Joke.find({});

    return res.json(jokes);
});

router.get("/:id", async (req, res) => {
    const joke = await Joke.findById(req.params.id);

    return res.json(joke);
});

router.post("/", async (req, res) => {
    if (!req.body.question || !req.body.answer || !req.body.category) {
        return res.status(400).json({
            error: "Missing required fields"
        });
    }

    if (req.body.question.length < 3 || req.body.answer.length < 3) {
        return res.status(400).json({
            error: "Question and answer must be at least 3 characters long"
        });
    }

    const joke = new Joke(req.body);
    const savedJoke = await joke.save();

    return res.json(savedJoke);
});

router.delete("/:id", async (req, res) => {
    await Joke.findByIdAndDelete(req.params.id);

    return res.status(204).end();
});

module.exports = router;
