const { v4: uuidv4 } = require("uuid");

const cats = [
    {
        id: uuidv4(),
        name: "Luna",
        age: 2,
        breed: "não definido",
        adopted: true,
        createdAt: "11/08/2024",
    },
    {
        id: uuidv4(),
        name: "Simba",
        age: 4,
        breed: "não definido",
        adopted: false,
        createdAt: "11/08/2024",
    },
];

module.exports = cats;
