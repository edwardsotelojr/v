require('dotenv').config()
const mongoose = require('mongoose')
const express = require("express")
const routes = require('./routes')
const bodyParser = require('body-parser')
mongoose.connect("mongodb://localhost:27017/vibin", {
  useNewUrlParser: true
}).then(() => {
  console.log("Mongoose Connected")
}).catch((err) => {
  console.log("err: ", err)
})
const app = express()
const PORT = process.env.PORT
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use('/', routes)

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT)
  });