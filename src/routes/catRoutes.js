const express = require("express")
const router = express.Router()
const { listCats, addCat, editCat, deleteCat } = require("../controllers/catsController")

router.get("/cat", listCats)
router.post("/cat", addCat)
router.patch("/cat/:id", editCat)
router.delete("/cat/:id", deleteCat)

module.exports = router