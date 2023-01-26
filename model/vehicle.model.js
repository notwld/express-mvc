const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
    v_type: String,
    description: String,
    engine: String,
    color: String,
    company: { type: Schema.Types.ObjectId, ref: 'Company', required: true }
})


module.exports = mongoose.model("Vehicle", vehicleSchema);