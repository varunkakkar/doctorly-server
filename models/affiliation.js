const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const affiliationSchema = new Schema({
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor"
    },
    hospital_name: {
        type: String
    },
    city: {
        type: String,
    },
    country: {
        type: String
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date,
    }
},{
    timestamps: true
})

module.exports = new mongoose.model("Affiliation", affiliationSchema);