const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inNetworkInsuranceSchema = new Schema({
    office: { 
        type: Schema.Types.ObjectId,
        ref: "Office"
    },
    insurance_name: { 
        type: String
    }
}, { timestamps: true })

module.exports = new mongoose.model("In_Network_Insurance", inNetworkInsuranceSchema);