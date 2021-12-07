const mongoose = require("mongoose");

const PostsModel = mongoose.model(
    "projetweb",
    {
        value: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    },
    "enedis",

);

module.exports = { PostsModel };