const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
    v_type: String,
    description: String,
    engine: String,
    color: String,
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }
})


module.exports = mongoose.model("Vehicle", vehicleSchema);