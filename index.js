const app = require("express")()
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

mongoose.connect(process.env.URI)
.then(res=>{
    console.log("Connected to MongoDB server")
})
.catch(err=>{
    console.log(err)
})

app.use(bodyParser.urlencoded())

//routes



//server
app.listen(process.env.PORT,()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})