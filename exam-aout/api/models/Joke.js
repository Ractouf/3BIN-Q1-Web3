const mongoose = require("mongoose");

const jokesSchema = new mongoose.Schema({
    question: String,
    answer: String,
    category: String,
});

jokesSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id
        delete returnedObject.__v
    }
});

module.exports = mongoose.model('Joke', jokesSchema);
