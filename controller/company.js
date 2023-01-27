const Company = require('../model/company.model');
const router = require("express").Router();

router.get("/companies",async(req, res) => {
  const companies = await Company.find()
  res.render("company",{
    brands:companies
    })

});


router.post("/savebrand", async(req, res) => {
    const newCompany = new Company({
        name: req.body.name,
        location: req.body.location,
        vehicles: []
    });
    await newCompany.save()
    res.redirect("/companies")
}
);

router.post("/updatebrand/:id", async (req, res) => {
    const id = req.params.id;
    await Company.updateOne({ _id: id }, { $set: { name: req.body.b_name, location: req.body.b_location } })
    res.redirect("/companies")
}
);

router.get("/deletebrand/:id", async (req, res) => {
    const id = req.params.id;
    await Company.findByIdAndDelete(id)
    res.redirect("/companies")
}
);

module.exports = router;