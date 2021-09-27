const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const officeSchema = new Schema({
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor"
    },
    affiliation: {
        type: Schema.Types.ObjectId,
        ref: "Affiliation"
    },
    time_slot_per_client_min: {
        type: Number,
    },
    first_counsultation_fee: {
        type: Number
    },
    followup_consultation_fee: {
        type: Number
    },
    street_address: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    pincode: {
        type: String,
        alias: "zip"
    }
},{timestamps: true});