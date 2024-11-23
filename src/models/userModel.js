const { v4 } = require("uuid")
const { v4: uuidv4 } = require("uuid")

const users = [
    {
        id: uuidv4(),
        name: "Larissa",
        email: "larissa@gmail.com",
        password: "1234",
        role: "admin",
        createdAt: "",
        updatedAt: ""
    },
    {
        id: uuidv4(),
        name: "Pedro",
        email: "pedro@gmail.com",
        password: "4321",
        role: "user",
        createdAt: "",
        updatedAt: ""
    },
]

module.exports = users
