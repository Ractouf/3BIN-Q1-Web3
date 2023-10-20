require('dotenv').config();
const express = require('express');
const Phonebook = require('./models/Phonebook');

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/phonebooks", async (req, res) => {
    const response = await Phonebook.find({});

    res.json(response);
});

app.post("/phonebooks", async (req, res) => {
    const response = await Phonebook.find({name: req.body.name});

    if (response.length !== 0) {
        await Phonebook.updateOne({name:response[0].name}, {number: req.body.number});
    } else {
        const phonebook = new Phonebook({
            name: req.body.name,
            number: req.body.number,
        });

        await phonebook.save();
    }

    res.json(req.body)
});

const errorHandler = (error, req, res, next) => {
    console.log("malformatted id");
    if (error.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' })
    }

    next(error)
}

app.use(errorHandler)

app.delete("/phonebooks/:id", async (req, res, next) => {
    await Phonebook.findByIdAndRemove(req.params.id).catch(error => errorHandler(error, req, res, next));
    res.status(204).end();
});

module.exports = app;
