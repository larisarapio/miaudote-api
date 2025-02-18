const { v4: uuidv4 } = require("uuid")
const Role = require("../domain/roleEnum")

const users = [
    {
        id: uuidv4(),
        name: "Larissa",
        email: "larissa@gmail.com",
        password: "1234",
        role: Role.ADMIN,
        createdAt: "",
        updatedAt: ""
    },
    {
        id: uuidv4(),
        name: "Pedro",
        email: "pedro@gmail.com",
        password: "4321",
        role: Role.USER,
        createdAt: "",
        updatedAt: ""
    },
]

module.exports = users
