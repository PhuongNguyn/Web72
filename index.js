const express = require("express") // commonjs
const app = express()
const PORT = 3001
const morgan = require("morgan")
const router = require("./routers")
const cors = require("cors")
const { logMiddleWare } = require("./middlewares")
const dotenv = require("dotenv")
const connectDb = require("./database")
dotenv.config()

app.use(morgan("combined"))
app.use(cors({ origin: "*" }))
connectDb()
// parse body trong request -> ko co thang nay thi khong lay duoc body tu request
app.use(express.json())
// Global middlware
app.use(logMiddleWare)
app.use(router)

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})