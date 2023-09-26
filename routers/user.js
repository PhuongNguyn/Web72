const { getUser, createUser, editUser, deleteUser } = require("../controllers/user")

const router = require("express").Router()

// Restful API

// Get -> get du lieu tu server len
router.get('/', getUser)

// Post -> Tao moi du lieu
router.post('/', createUser)

// Put -> cap nhat lai toan bo
router.put('/:id', editAllInfoUser)

// Patch -> cap nhat lai 1 phan 
router.patch('/:id', editUser)

// Delete -> xoa du lieu
router.delete('/:id', deleteUser)


module.exports = router