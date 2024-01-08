const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const scoreSchema = new mongoose.Schema({
    username: String,
    date: Date,
    score: Number,
    joke: ObjectId
});

scoreSchema.index({ username: 1, joke: 1 }, { unique: true });

scoreSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id
        delete returnedObject.__v
    }
});

module.exports = mongoose.model('Score', scoreSchema);
