const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connect DB successfull")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb