const router = require("express").Router()

const user = [
    {
        id: 1,
        name: "Phuong",
        age: 10,
    }
]

// Restful API

// Get -> get du lieu tu server len
router.get('/', (req, res) => {
    return res.status(200).json({ message: "Get Hello world", user })
})


// Post -> Tao moi du lieu
router.post('/', (req, res) => {
    const username = req.body.username
    const age = req.body.age
    const id = req.body.id

    const newUser = { id: id, name: username, age: age }
    return res.status(200).json({ message: "Post Hello World", user: [...user, newUser] })
})

// Put -> cap nhat lai toan bo
router.put('/:id', (req, res) => {
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
router.patch('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
    const id = req.params.id
    const result = user.filter(item => item.id != id)
    return res.status(200).json({ message: "Delete Hello world", user: result })
})

module.exports = router