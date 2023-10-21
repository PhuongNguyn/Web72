const mongoose = require("mongoose")

const Product = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "categories",
        required: true,
    },
    quantity: {
        type: Number,
        default: 0
    },
    thumbnail: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("products", Product)