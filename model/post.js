const mongoose = require("mongoose")

const Post = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    files: [{
        type: String
    }],
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("posts", Post)