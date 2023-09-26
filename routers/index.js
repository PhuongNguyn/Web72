const userRouter = require("./user")
const productRouter = require("./products")
const router = require("express").Router()

router.use('/user', userRouter)
router.use('/product', productRouter)

module.exports = router