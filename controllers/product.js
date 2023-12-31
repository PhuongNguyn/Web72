const productModel = require("../model/product")
const joi = require("joi")
const userModel = require("../model/user")
const { uploadImage } = require("../cloudinary")

const getProductById = async (req, res) => {
    try {
        const productId = req.params.id

        const product = await productModel.findById(productId)

        return res.status(200).json({ product })
    } catch (error) {
        return res.status(500).json(error)
    }
}

const createProduct = async (req, res) => {
    try {
        const productSchema = joi.object({
            name: joi.string().required().min(3).max(32).messages({
                "string.min": "Tên phải có 3 kí tự trở lên",
                "string.max": "Tên phải bé hơn 32 kí tự",
                "string.base": "Tên phải là kiểu dữ liệu string",
                "any.required": "Tên không được để trống"
            }),
            price: joi.number().required().messages({
                "any.required": 'Gía tiền không được bỏ trống'
            }),
            quantity: joi.number().required(),
            slug: joi.string().required()
        }).unknown(true)


        const name = req.body.name
        const price = req.body.price
        const quantity = req.body.quantity
        const image = req.files.image
        const slug = req.body.slug

        const validate = productSchema.validate({ name, price, quantity })
        if (validate.error) {
            return res.status(400).json({ error: validate.error.message })
        }

        const uploadFile = await uploadImage(image)

        const newProduct = await productModel.create({ name, price, quantity, image: uploadFile, createdBy: req.userId, slug })
        return res.status(201).json({ product: newProduct, message: "Tao san pham thanh cong" })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: error.message || "Failed" })
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const name = req.body.name
        const price = req.body.price
        const quantity = req.body.quantity
        const image = req.files?.image
        const slug = req.body.slug

        let dataUpdate = {
            id,
            name,
            price,
            quantity,
            slug
        }

        if (image) {
            const upload = await uploadImage(image)

            dataUpdate = {
                ...dataUpdate,
                image: upload
            }
        }

        const product = await productModel.findOneAndUpdate({ _id: id }, dataUpdate, { new: true })

        return res.status(200).json({ message: "Update san pham thanh cong", product })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: error.message || "Failed" })
    }

}

const getProduct = async (req, res) => {
    try {
        const products = await productModel.find()

        return res.status(200).json({ products })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: error.message || "Failed" })
    }
}

const getPagingProduct = async (req, res) => {
    try {
        const pageSize = req.query.pageSize || 5// So luong phan tu trong 1 trang
        const pageIndex = req.query.pageIndex || 1 // So trang

        const product = await productModel
            .find()
            .populate({ path: "createdBy", select: "-password" })
            .skip(pageSize * pageIndex - pageSize).limit(pageSize)
        const count = await productModel.countDocuments()
        const totalPage = Math.ceil(count / pageSize)

        return res.status(200).json({ product, count, totalPage })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: error.message || "Failed" })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id

        const product = await productModel.findOneAndDelete({ _id: id })

        return res.status(200).json({ message: "Xoa san pham thanh cong" })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: error.message || "Failed" })
    }
}

module.exports = {
    createProduct,
    updateProduct,
    getProduct,
    getPagingProduct,
    deleteProduct,
    getProductById
}