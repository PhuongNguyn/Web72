
const authentication = (req, res, next) => {
    const token = req.headers.authorization // Khi ma dang nhap vao thanh cong -> backend cap cho ben phia client 1 doan ma

    if (token == "abc123456") {
        next()
    } else {
        return res.status(401).json({ message: "Ban chua dang nhap" })
    }
}

const authorization = (req, res, next) => {

}

const logMiddleWare = (req, res, next) => {
    console.log('Log middleware')
    next()
}

module.exports = {
    authentication,
    logMiddleWare
}