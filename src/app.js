const express = require("express")
const app = express()
const port = 3333
const catRoutes = require("./routes/catRoutes")
const userRoutes = require("./routes/userRoutes")

app.use(express.json())

app.use(catRoutes, userRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
