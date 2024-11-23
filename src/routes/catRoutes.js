const express = require("express")
const router = express.Router()
const { listCats, addCat, editCat, deleteCat, adoptCat } = require("../controllers/catsController")

router.get("/cat", listCats)
router.post("/cat", addCat)
router.patch("/cat/:id", editCat)
router.delete("/cat/:id", deleteCat)

router.patch("/cat/:id/adopt", adoptCat)

module.exports = router