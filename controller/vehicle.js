const router = require("express").Router()
const Vehicle = require("../model/vehicle.model")
const Company = require("../model/company.model")
router.post("/save",async(req,res)=>{
    console.log(req.body)
    const newVehicle = await Vehicle.create(req.body)
    await newVehicle.save()
    return res.redirect("/")
})

router.get("/", async(req, res) => {
    let vehicles = await Vehicle.find();

    const companies = await Company.find();
    const promises = vehicles.map(async vehicle => {
        vehicle.company = await Company.findById(vehicle.company)
        return vehicle
    })
    vehicles = await Promise.all(promises)
    res.render("index",{
        vehicles:vehicles,
        companies:companies
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
        company: req.body.edit_company
    })
    vehicle.save()
    return res.redirect("/")
})


module.exports = router