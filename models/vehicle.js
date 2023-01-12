const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
    v_type: String,
    description: String,
    engine: String,
    color: String
})


module.exports = mongoose.model("Vehicle", vehicleSchema);