const app = require("express")()
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const ejs = require("ejs");

const vehicle = require("./models/vehicle")

dotenv.config()
mongoose.connect(process.env.URI + "/Vehicle")
    .then(res => {
        console.log("Connected to MongoDB server")
    })
    .catch(err => {
        console.log(err)
    })

app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")



//routes

app.post("/save",async(req,res)=>{
    const newVehicle = await vehicle.create(req.body)
    await newVehicle.save()
    return res.redirect("/")
})
app.get("/", async(req, res) => {
    const vehicles = await vehicle.find();
    res.render("index",{
        vehicles:vehicles
    })
})


//server
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})