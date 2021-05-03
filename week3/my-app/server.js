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

// Routes
app.use("/", require("./routes/issueRouter"))
app.use("/auth", require("./routes/authRouter"))

// ERROR HANDLER

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log("This server is running on Port 9000")
})