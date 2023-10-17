

const mongoose = require("mongoose")

const User = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "customer"
    },
    name: {
        type: String,
    },
    age: {
        type: Number,
    }
})

module.exports = mongoose.model("users", User)