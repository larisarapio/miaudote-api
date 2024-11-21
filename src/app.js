const express = require("express")
const app = express()
const port = 3333

app.use(express.json())

const catRoutes = require("./routes/catRoutes")
app.use(catRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
