const express = require('express')
const app = express()

const router = require("./Config/router")

app.set('view engine', 'ejs')
app.use(router)
app.listen(9000)