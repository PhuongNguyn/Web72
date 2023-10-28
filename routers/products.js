const router = require("express").Router()
const { createProduct, updateProduct, getProduct, deleteProduct, getPagingProduct, getProductById } = require('../controllers/product')
const { authentication } = require("../middlewares")

router.post('/', authentication, createProduct)
router.put('/:id', updateProduct)
router.get('/', getProduct)
router.delete('/:id', deleteProduct)
router.get('/get-paging', getPagingProduct)
router.get('/:id', getProductById)

module.exports = router