const router = require("express").Router()
const { getUser, createUser, updateUserAll, updateUser, deleteUser, login } = require('../controllers/user')
const { authentication, authorization } = require("../middlewares")

// Get -> get du lieu tu server len
router.get('/', authentication, authorization("user", "read"), getUser)
// Post -> Tao moi du lieu
router.post('/', authentication, authorization("user", "write"), createUser)
router.post('/login', login)
// Put -> cap nhat lai toan bo
router.put('/:id', authentication, updateUserAll)
// Patch -> cap nhat lai 1 phan 
router.patch('/:id', authentication, updateUser)
// Delete -> xoa du lieu
router.delete('/:id', authentication, deleteUser)

module.exports = router