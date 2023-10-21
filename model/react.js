const mongoose = require("mongoose")

const React = mongoose.Schema({
    reactedBy: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    post: {
        type: mongoose.Types.ObjectId,
        ref: "posts",
        required: true
    },
    type: {
        type: String,
        enum: ["like", "heart", "sad"]
    }
})

module.exports = mongoose.model("reacts", React)