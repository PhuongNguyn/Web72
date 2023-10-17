const jwt = require("jsonwebtoken")
const { user, role } = require("../data")
const userModel = require("../model/user")

const authentication = async (req, res, next) => {
    const bearerToken = req.headers.authorization // Khi ma dang nhap vao thanh cong -> backend cap cho ben phia client 1 doan ma

    if (!bearerToken) {
        return res.status(401).json({ message: "Ban chua dang nhap" })
    }

    const token = bearerToken.split(" ")[1] // Bearer token
    try {
        const checkToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const userId = checkToken.id
        const user = await userModel.findById(userId)
        if (!user) {
            return res.status(401).json({ message: "Ban chua dang nhap" })
        }
        req.user = user
        req.userId = userId
        next()
    } catch (error) {
        return res.status(401).json({ message: "Ban chua dang nhap" })
    }
}
const authorization = (key, action) => {
    return (req, res, next) => {
        const userId = req.userId
        const findUser = user.find(item => item.id == userId)
        const findRole = role.find(item => item.id == findUser.role)

        const checkPermission = findRole.permission.find(item => item.key == key && item.action == action)

        if (!checkPermission) {
            return res.status(403).json({ message: "Ban khong co quyen de thuc hien hanh dong nay" })
        }

        next()
    }
}

// const authorization = (req, res, next) => {
//     const userId = req.userId
//     const findUser = user.find(item => item.id == userId)
//     const findRole = role.find(item => item.id == findUser.role)

//     if (!(findUser.role == "admin")) {
//         return res.status(403).json({ message: "Ban khong co quyen de thuc hien hanh dong nay" })
//     }

//     next()
// }




// const authorization = (arrayPermission) => {
//     return (req, res, next) => {
//         const userId = req.userId
//         const findUser = user.find(item => item.id == userId)
//         const findRole = role.find(item => item.id == findUser.role)

//         let flag = true

//         arrayPermission.forEach(item => {
//             const checkPermission = findRole.permission.find(p => item.action == p.action && item.key == p.key)

//             if (!checkPermission) {
//                 flag = false
//             }
//         })
//         if (!flag) {
//             return res.status(403).json({ message: "Ban khong co quyen de thuc hien hanh dong nay" })
//         }

//         next()
//     }
// }

const logMiddleWare = (req, res, next) => {
    console.log('Log middleware')
    next()
}

module.exports = {
    authentication,
    logMiddleWare,
    authorization
}