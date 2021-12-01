const mongoose = require("mongoose");

const PostsModel = mongoose.model(
    "projetweb",
    {
        age: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    "test1"
);

module.exports = { PostsModel };