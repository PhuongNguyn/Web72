const mongoose = require("mongoose")

const Product = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    quantity: {
        type: Number,
        default: 0,
    },

    image: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("products", Product)
