const mongoose = require("mongoose")

const CompanySchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  vehicles: [{ type: Schema.Types.ObjectId, ref: 'Vehicle' }]
});

module.exports = mongoose.model("Company",CompanySchema);