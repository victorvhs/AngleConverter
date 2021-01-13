const express = require("express")

const router = require ("./src/app/router/angle")
const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.use(router)

app.listen(port, ()=>{
  console.log("Server is online\nYou can access on http://localhost:"+port)
})

module.exports = app