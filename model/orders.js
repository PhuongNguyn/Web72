const mongoose = require("mongoose")

const Order = mongoose.Schema({
    orderedBy: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    orderDetail: [
        {
            product: {
                type: mongoose.Types.ObjectId,
                ref: "products"
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    status: {
        type: String,
        enum: ["pending", "canceled", "delivering"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("orders", Order)
