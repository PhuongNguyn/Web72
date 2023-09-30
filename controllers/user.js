const user = [
    {
        id: 1,
        name: "Phuong",
        age: 10,
        username: "phuong123",
        password: "123456"
    }
]

const login = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const checkExist = user.find(item => item.username == username)

    if (!checkExist) {
        return res.status(404).json({ message: "Khong tim thay user" })
    }

    if (!(checkExist.password == password)) {
        return res.status(401).json({ message: "Sai mat khau" })
    }

    return res.status(200).json({ user: checkExist, token: "abc123456" })
}

const getUser = (req, res) => {
    return res.status(200).json({ message: "Get Hello world", user })
}

const createUser = (req, res, next) => {
    const username = req.body.username
    const age = req.body.age
    const id = req.body.id

    const newUser = { id: id, name: username, age: age }
    return res.status(200).json({ message: "Post Hello World", user: [...user, newUser] })
}

const updateUserAll = (req, res) => {
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
}

const updateUser = (req, res) => {
    const id = req.params.id
    const age = req.body.age

    const result = user.map(item => {
        if (item.id == id) {
            item.age = age
        }

        return item
    })

    return res.status(200).json({ message: "Patch Hello world", user: result })
}

const deleteUser = (req, res) => {
    const id = req.params.id
    const result = user.filter(item => item.id != id)
    return res.status(200).json({ message: "Delete Hello world", user: result })
}

module.exports = { getUser, createUser, updateUser, deleteUser, updateUserAll, login }

