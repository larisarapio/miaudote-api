const users = require ("../models/userModel")
const { v4: uuidv4 } = require("uuid")

function addUser (request, response) {

    const newUser = {
        id: uuidv4(),
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        role: request.body.role,
        createdAt: request.body.createdAt,
        updatedAt: request.body.updatedAt
    }
    
    users.push(newUser)

    response.status(201).json(newUser)
    
}

function editUser (request, response) {
    const idUser = request.params.id
    const searchUser = users.find(user => user.id === idUser)

    if (!searchUser) {
        return response.status(404).json({ error: "Usuário não encontrado" })

    }

    if (request.body.name !== undefined) searchUser.name = request.body.name
    if (request.body.email !== undefined) searchUser.email = request.body.email
    if (request.body.password !== undefined) searchUser.password = request.body.password

    response.status(200).json(searchUser)

}

function listUsers (request, response) {
    response.json(users)
}

function login (request, response) {
    const { email, password } = request.body

    const user = users.find((u) => u.email === email)

    if(!user) {
        return response.status(404).json({ error: 'Usuário não encontrado' })
    }

    const isPasswordValid  = user.password === password;
    if (!isPasswordValid) {
        return response.status(401).json({ error: 'Senha inválida' });
    }

    response.status(200).json({ message: `Olá, ${user.name}!` })

}

module.exports = { addUser, editUser, listUsers, login }