const app = require("express")()
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const ejs = require("ejs");

dotenv.config()
mongoose.connect(process.env.URI)
    .then(res => {
        console.log("Connected to MongoDB server")
    })
    .catch(err => {
        console.log(err)
    })

app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")


//routes
app.use("/vehicle", require("./controller/vehicle"))
app.use("/company", require("./controller/company"))


//server
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})