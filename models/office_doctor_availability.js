const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const officeDoctorAvailabilitySchema = new Schema({
    office: {
        type: Schema.Types.ObjectId,
        ref: "Office"
    },
    day_of_week: {
        type: String,
        enum: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },
    start_time: {
        type: String
    },
    end_time: {
        type: String
    },
    is_available: {
        type: Boolean,
    },
    reason_of_not_available: {
        type: String
    }
}, { timestamps: true })

module.exports = new mongoose.model("Office_Doctor_Availability", officeDoctorAvailabilitySchema);