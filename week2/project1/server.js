const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


// Middleware

app.use(express.json())
app.use(morgan('dev'))

// Connect to DB

mongoose.connect('mongodb://localhost:27017/inventorydb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  },
  () => console.log("Connected to the DB")
)

app.use("/inventory", require("./routes/inventoryRouter"))

// ERROR HANDLER

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log("The App is listening on Port 9000")
})