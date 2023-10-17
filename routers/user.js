const router = require("express").Router()
const { getUser, createUser, updateUserAll, updateUser, deleteUser, login, signUp } = require('../controllers/user')
const { authentication, authorization } = require("../middlewares")

// Get -> get du lieu tu server len
router.post('/sign-up', signUp)
router.get('/', authentication, getUser)
// Post -> Tao moi du lieu
router.post('/', authentication, createUser)
router.post('/login', login)
// Put -> cap nhat lai toan bo
router.put('/:id', authentication, updateUserAll)
// Patch -> cap nhat lai 1 phan 
router.patch('/:id', authentication, updateUser)
// Delete -> xoa du lieu
router.delete('/:id', authentication, deleteUser)

module.exports = router