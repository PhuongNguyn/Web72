const express = require("express") // commonjs
const app = express()
const PORT = 3000
const morgan = require("morgan")
const router = require("./routers")
const cors = require("cors")

app.use(morgan("combined"))
// parse body trong request -> ko co thang nay thi khong lay duoc body tu request
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})