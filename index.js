const express = require("express") // commonjs
const app = express()
const PORT = 3000
const morgan = require("morgan")
const router = require("./routers")
const cors = require("cors")
const { logMiddleWare } = require("./middlewares")
const dotenv = require("dotenv")
dotenv.config()

app.use(morgan("combined"))
// parse body trong request -> ko co thang nay thi khong lay duoc body tu request
app.use(express.json())
// Global middlware
app.use(logMiddleWare)
app.use(router)

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})