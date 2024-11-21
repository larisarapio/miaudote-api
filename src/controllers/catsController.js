const cats = require("../models/catModel")
const { v4: uuidv4 } = require("uuid")

function listCats(request, response){
    response.json(cats)
}

function addCat(request, response){

    const newCat = {
        id: uuidv4(),
        name: request.body.name,
        age: request.body.age,
        breed: request.body.breed,
        adopted: request.body.adopted,
        createdAt: request.body.createdAt
    }

    cats.push(newCat)

    response.status(201).json(newCat)
}

function editCat(request, response) {
    
    const idCat = request.params.id
    const searchCat = cats.find(cat => cat.id === idCat)

    if (!searchCat) {
        return response.status(404).json({ error: "Gato não encontrado" })

    }

    if (request.body.name !== undefined) searchCat.name = request.body.name;
    if (request.body.age !== undefined) searchCat.age = request.body.age;
    if (request.body.breed !== undefined) searchCat.breed = request.body.breed;
    if (request.body.adopted !== undefined) searchCat.adopted = request.body.adopted;

    response.status(200).json(searchCat)
}

function deleteCat(request, response) {
    const idCat = request.params.id
    const index = cats.findIndex(cat => cat.id === idCat)

    if (index === -1) {
        return response.status(404).json({ error: 'Gato não encontrado' })
    }

    const deletedCat = cats.splice(index, 1)

    response.status(200).json(deletedCat[0])

}

module.exports = { listCats, addCat, editCat, deleteCat }