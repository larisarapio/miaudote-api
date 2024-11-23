const express = require ("express")
const router = express.Router()
const { addUser, editUser, listUsers, login } = require ("../controllers/usersController")

router.get("/users", listUsers)
router.patch("/users/:id", editUser)
router.post("/register", addUser)
router.post("/login", login)

module.exports = router