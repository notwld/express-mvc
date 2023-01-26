const { Company } = require('../models/Company');
const router = require("express").Router();

router.get("/",(req, res) => {
  Company.find()
    .then(companies => res.json(companies))
    .catch(err => res.status(404).json({ nocompaniesfound: 'No companies found' }));
});

router.get("/:id", (req, res) => {
    Company.findById(req.params.id)
        .then(company => res.json(company))
        .catch(err => res.status(404).json({ nocompanyfound: 'No company found' }));
    }
);

router.post("/", (req, res) => {
    Company.create(req.body)
        .then(company => res.json({ msg: 'Company added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this company' }));
}
);

router.put("/:id", (req, res) => {
    Company.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then(company => res.json(company))
    .catch(err => res.status(404).json({ nocompanyfound: 'No company found with that ID' }));
}
);

router.delete("/:id", (req, res) => {
    Company.findByIdAndRemove(req.params.id, req.body)
        .then(company => res.json({ mgs: 'Company entry deleted successfully' }))
        .catch(err => res.status(404).json({ nocompanyfound: 'No company found' }));
    }
);

module.exports = router;