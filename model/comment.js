const mongoose = require("mongoose")

const Comment = mongoose.Schema({
    commentBy: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true,
    },
    post: {
        type: mongoose.Types.ObjectId,
        ref: "posts",
        required: true,
    },
    content: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("comments", Comment)