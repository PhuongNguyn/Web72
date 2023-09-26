const router = require("express").Router()

const products = [
    {
        id: 1,
        name: "Phuong",
        price: 1000,
    }
]

// Restful API

// Get -> get du lieu tu server len
router.get('/product', (req, res) => {
    return res.status(200).json({ message: "Get Hello world", user })
})


// Post -> Tao moi du lieu
router.post('/product', (req, res) => {
    const username = req.body.username
    const age = req.body.age
    const id = req.body.id

    const newUser = { id: id, name: username, age: age }
    return res.status(200).json({ message: "Post Hello World", user: [...user, newUser] })
})

// Put -> cap nhat lai toan bo
router.put('/product/:id', (req, res) => {
    const id = req.params.id
    const username = req.body.username
    const age = req.body.age

    const result = user.map(item => {
        if (item.id == id) {
            item.age = age
            item.name = username
        }

        return item
    })

    return res.status(200).json({ message: "Put Hello world", user: result })
})

// Patch -> cap nhat lai 1 phan 
router.patch('/product/:id', (req, res) => {
    const id = req.params.id
    const age = req.body.age

    const result = user.map(item => {
        if (item.id == id) {
            item.age = age
        }

        return item
    })

    return res.status(200).json({ message: "Patch Hello world", user: result })
})

// Delete -> xoa du lieu
router.delete('/product/:id', (req, res) => {
    const id = req.params.id
    const result = user.filter(item => item.id != id)
    return res.status(200).json({ message: "Delete Hello world", user: result })
})

module.exports = router