
const user = [
    {
        id: 1,
        name: "Phuong",
        age: 10,
        username: "phuong123",
        password: "123456",
        role: 1
    },
    {
        id: 2,
        name: "Tuan",
        age: 10,
        username: "tuan123",
        password: "123456",
        role: 2
    },
    {
        id: 3,
        name: "Minh",
        age: 10,
        username: "minh123",
        password: "123456",
        role: 3
    }
]

const role = [
    {
        id: 1,
        name: "admin",
        permission: [
            {
                key: "user",
                action: "read"
            },
            {
                key: "user",
                action: "write"
            }
        ]
    },
    {
        id: 2,
        name: "cutomer",
        permission: [
            {
                key: "user",
                action: "read"
            }
        ]
    },
    {
        id: 3,
        name: "writer",
        permission: [

        ]
    },

]

module.exports = {
    user,
    role
}