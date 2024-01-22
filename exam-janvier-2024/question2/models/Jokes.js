const mongoose = require("mongoose");
const {ObjectId} = require("mongodb");

const commentSchema = new mongoose.Schema({
    joke: ObjectId,
    username: String,
    comment: String
});

const jokesSchema = new mongoose.Schema({
    name: String,
    joke: String,
    imageUrl: String,
    comments: [commentSchema]
});

commentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id
        delete returnedObject.__v
    }
});

jokesSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id
        delete returnedObject.__v
    }
});

module.exports = mongoose.model('Jokes', jokesSchema);
