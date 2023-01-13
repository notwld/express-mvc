const router = require("express").Router()
const Vehicle = require("../model/vehicle.model")

router.post("/save",async(req,res)=>{
    const newVehicle = await Vehicle.create(req.body)
    await newVehicle.save()
    return res.redirect("/")
})

router.get("/", async(req, res) => {
    const vehicles = await Vehicle.find();
    res.render("index",{
        vehicles:vehicles
    })
})

router.get("/delete/:id", async(req, res) => {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id)
    return res.redirect("/")
})

router.get("/vehicle/:id", async(req, res) => {
    const vehicle = await Vehicle.findById(req.params.id)
    res.render("vehicle",{
        vehicle:vehicle
    })
})

router.post("/update/:id", async(req, res) => {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id,{
        v_type: req.body.edit_v_type,
        description: req.body.edit_description,
        color: req.body.edit_color,
        engine: req.body.edit_engine,
    })
    vehicle.save()
    return res.redirect("/")
})


module.exports = router